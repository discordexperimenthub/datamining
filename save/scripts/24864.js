(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24864"],
  {
    840489: function (e, l, a) {
      "use strict";
      a.r(l),
        a.d(l, {
          default: function () {
            return M;
          },
        }),
        a("222007"),
        a("424973"),
        a("808653");
      var s = a("37983"),
        t = a("884691"),
        o = a("414456"),
        i = a.n(o),
        r = a("316693"),
        d = a("77078"),
        n = a("318738"),
        u = a("798609"),
        c = a("454273"),
        N = a("991170"),
        O = a("713955"),
        v = a("782340"),
        R = a("623929");
      let h = (e, l) =>
          t.useCallback(
            (a, s) => {
              let t = (0, O.getAllRolesRows)(e),
                o = new Set(s),
                i = { ...l.permissionOverwrites },
                d = [],
                v = [];
              return (
                t.forEach(l => {
                  var s, t, n, O, R, h, E, m, _, f;
                  let M = l.id,
                    S = o.has(M);
                  S
                    ? d.push({
                        id: M,
                        type: u.PermissionOverwriteType.ROLE,
                        allow: S
                          ? r.default.add(
                              null !==
                                (O =
                                  null === (s = i[M]) || void 0 === s
                                    ? void 0
                                    : s.allow) && void 0 !== O
                                ? O
                                : N.default.NONE,
                              a
                            )
                          : r.default.remove(
                              null !==
                                (R =
                                  null === (t = i[M]) || void 0 === t
                                    ? void 0
                                    : t.allow) && void 0 !== R
                                ? R
                                : N.default.NONE,
                              a
                            ),
                        deny: r.default.remove(
                          null !==
                            (h =
                              null === (n = i[M]) || void 0 === n
                                ? void 0
                                : n.deny) && void 0 !== h
                            ? h
                            : N.default.NONE,
                          a
                        ),
                      })
                    : (0, c.isEveryoneRoleId)(e.id, M)
                      ? d.push({
                          id: M,
                          type: u.PermissionOverwriteType.ROLE,
                          allow: r.default.remove(
                            null !==
                              (_ =
                                null === (E = i[M]) || void 0 === E
                                  ? void 0
                                  : E.allow) && void 0 !== _
                              ? _
                              : N.default.NONE,
                            a
                          ),
                          deny: r.default.add(
                            null !==
                              (f =
                                null === (m = i[M]) || void 0 === m
                                  ? void 0
                                  : m.deny) && void 0 !== f
                              ? f
                              : N.default.NONE,
                            a
                          ),
                        })
                      : M in i && v.push(M);
                }, []),
                (0, n.saveAndClearPermissionUpdates)(l.id, d, v)
              );
            },
            [e, l]
          ),
        E = e => l => null != l && !(0, c.isEveryoneRoleId)(e, l),
        m = e =>
          t.useMemo(
            () => (0, O.getAllRolesRows)(e).filter(l => E(e.id)(l.id)),
            [e]
          ),
        _ = (e, l, a) => {
          let s = N.default.canEveryoneRole(a, l),
            [o, i] = t.useState(s);
          return { shouldEveryonePost: o, setShouldEveryonePost: i };
        },
        f = e => {
          let { rolesRow: l } = e;
          return (0, s.jsx)("div", {
            "aria-hidden": !0,
            className: R.roleCircle,
            style: { backgroundColor: null == l ? void 0 : l.colorString },
          });
        };
      var M = e => {
        let {
            guild: l,
            channel: a,
            permission: o,
            onClose: r,
            transitionState: n,
            currentSelectedRoles: u = [],
          } = e,
          { shouldEveryonePost: c, setShouldEveryonePost: N } = _(l, a, o),
          O = t.useRef(null),
          M = m(l),
          S = M.reduce((e, l) => (e.set(l.id, l), e), new Map()),
          p = M.map(e => ({ key: e.key, label: e.name, value: e.id })),
          [I, x] = t.useState(u.map(e => e.id).filter(E(l.id))),
          [A, L] = t.useState(!1),
          [C, w] = t.useState(!1),
          g = I.length > 0 || c,
          j = h(l, a),
          y = async () => {
            if (!g) return;
            L(!0), w(!1);
            let e = [...I];
            if (c) {
              let a = l.getEveryoneRoleId();
              e.push(a);
            }
            try {
              await j(o, e), r();
            } catch (e) {
              w(!0);
            } finally {
              L(!1);
            }
          };
        return A
          ? (0, s.jsx)(d.Spinner, {})
          : (0, s.jsxs)(d.ModalRoot, {
              transitionState: n,
              "aria-label": v.default.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
              children: [
                (0, s.jsx)(d.ModalHeader, {
                  separator: !1,
                  className: R.modalHeader,
                  children: (0, s.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: R.header,
                    children:
                      v.default.Messages
                        .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_TITLE,
                  }),
                }),
                (0, s.jsx)(d.ModalContent, {
                  children: (0, s.jsxs)("div", {
                    className: R.container,
                    children: [
                      (0, s.jsx)("div", {
                        className: R.row,
                        children: (0, s.jsx)("div", {
                          ref: O,
                          className: R.roleSelectorContainer,
                          children: (0, s.jsx)(d.FocusRingScope, {
                            containerRef: O,
                            children: (0, s.jsx)(d.SearchableSelect, {
                              closeOnSelect: !1,
                              className: R.roleSelector,
                              maxVisibleItems: 5,
                              placeholder:
                                v.default.Messages
                                  .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_ROLE_INPUT_PLACEHOLDER,
                              multi: !0,
                              value: I,
                              options: p,
                              onChange: e => {
                                x(e);
                              },
                              renderOptionPrefix: e =>
                                null != e
                                  ? (0, s.jsx)(f, { rolesRow: S.get(e.value) })
                                  : null,
                            }),
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: R.row,
                        children: [
                          (0, s.jsx)(d.FormSwitch, {
                            value: c,
                            hideBorder: !0,
                            onChange: N,
                            className: R.switchGroup,
                            children:
                              v.default.Messages
                                .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_LET_EVERYONE_POST,
                          }),
                          (0, s.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children:
                              v.default.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_DESCRIPTION.format(),
                          }),
                        ],
                      }),
                      C
                        ? (0, s.jsx)("div", {
                            className: R.row,
                            children: (0, s.jsx)(d.Text, {
                              className: i(R.row, R.error),
                              variant: "text-sm/normal",
                              children:
                                v.default.Messages
                                  .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_ERROR,
                            }),
                          })
                        : null,
                    ],
                  }),
                }),
                (0, s.jsxs)(d.ModalFooter, {
                  className: R.footer,
                  children: [
                    (0, s.jsx)(d.Button, {
                      type: "submit",
                      color: d.Button.Colors.BRAND_NEW,
                      size: d.Button.Sizes.SMALL,
                      className: R.button,
                      onClick: y,
                      disabled: !g,
                      autoFocus: !0,
                      children: v.default.Messages.SAVE,
                    }),
                    (0, s.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      size: d.Button.Sizes.SMALL,
                      className: R.button,
                      onClick: r,
                      children: v.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
      };
    },
  },
]);
//# sourceMappingURL=068bbc356d3442ef6dbb.js.map
