(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24864"],
  {
    840489: function (e, l, s) {
      "use strict";
      s.r(l),
        s.d(l, {
          default: function () {
            return M;
          },
        }),
        s("222007"),
        s("424973"),
        s("808653");
      var a = s("37983"),
        t = s("884691"),
        o = s("414456"),
        r = s.n(o),
        i = s("316693"),
        n = s("446674"),
        d = s("77078"),
        u = s("318738"),
        c = s("798609"),
        N = s("454273"),
        O = s("305961"),
        v = s("991170"),
        R = s("713955"),
        m = s("782340"),
        h = s("623929");
      function E(e) {
        return l => null != l && !(0, N.isEveryoneRoleId)(e, l);
      }
      let S = (e, l, s) => {
          let a = v.canEveryoneRole(s, l),
            [o, r] = t.useState(a);
          return { shouldEveryonePost: o, setShouldEveryonePost: r };
        },
        _ = e => {
          let { rolesRow: l } = e;
          return (0, a.jsx)("div", {
            "aria-hidden": !0,
            className: h.roleCircle,
            style: { backgroundColor: null == l ? void 0 : l.colorString },
          });
        };
      var M = e => {
        let {
            guild: l,
            channel: s,
            permission: o,
            onClose: M,
            transitionState: f,
            currentSelectedRoles: p = [],
          } = e,
          { shouldEveryonePost: I, setShouldEveryonePost: x } = S(l, s, o),
          A = t.useRef(null),
          L = (function (e) {
            let l = (0, n.useStateFromStores)([O.default], () =>
              O.default.getRoles(e.id)
            );
            return t.useMemo(
              () => (0, R.getAllRolesRows)(e, l).filter(l => E(e.id)(l.id)),
              [e, l]
            );
          })(l),
          C = L.reduce((e, l) => (e.set(l.id, l), e), new Map()),
          g = L.map(e => ({ key: e.key, label: e.name, value: e.id })),
          [w, j] = t.useState(p.map(e => e.id).filter(E(l.id))),
          [y, D] = t.useState(!1),
          [B, P] = t.useState(!1),
          b = w.length > 0 || I,
          T = (function (e, l) {
            let s = (0, n.useStateFromStores)([O.default], () =>
              O.default.getRoles(e.id)
            );
            return t.useCallback(
              (a, t) => {
                let o = (0, R.getAllRolesRows)(e, s),
                  r = new Set(t),
                  n = { ...l.permissionOverwrites },
                  d = [],
                  O = [];
                return (
                  o.forEach(l => {
                    var s, t, o, u, R, m, h, E, S, _;
                    let M = l.id,
                      f = r.has(M);
                    f
                      ? d.push({
                          id: M,
                          type: c.PermissionOverwriteType.ROLE,
                          allow: f
                            ? i.add(
                                null !==
                                  (u =
                                    null === (s = n[M]) || void 0 === s
                                      ? void 0
                                      : s.allow) && void 0 !== u
                                  ? u
                                  : v.NONE,
                                a
                              )
                            : i.remove(
                                null !==
                                  (R =
                                    null === (t = n[M]) || void 0 === t
                                      ? void 0
                                      : t.allow) && void 0 !== R
                                  ? R
                                  : v.NONE,
                                a
                              ),
                          deny: i.remove(
                            null !==
                              (m =
                                null === (o = n[M]) || void 0 === o
                                  ? void 0
                                  : o.deny) && void 0 !== m
                              ? m
                              : v.NONE,
                            a
                          ),
                        })
                      : (0, N.isEveryoneRoleId)(e.id, M)
                        ? d.push({
                            id: M,
                            type: c.PermissionOverwriteType.ROLE,
                            allow: i.remove(
                              null !==
                                (S =
                                  null === (h = n[M]) || void 0 === h
                                    ? void 0
                                    : h.allow) && void 0 !== S
                                ? S
                                : v.NONE,
                              a
                            ),
                            deny: i.add(
                              null !==
                                (_ =
                                  null === (E = n[M]) || void 0 === E
                                    ? void 0
                                    : E.deny) && void 0 !== _
                                ? _
                                : v.NONE,
                              a
                            ),
                          })
                        : M in n && O.push(M);
                  }, []),
                  (0, u.saveAndClearPermissionUpdates)(l.id, d, O)
                );
              },
              [e, s, l]
            );
          })(l, s),
          F = async () => {
            if (!b) return;
            D(!0), P(!1);
            let e = [...w];
            if (I) {
              let s = l.getEveryoneRoleId();
              e.push(s);
            }
            try {
              await T(o, e), M();
            } catch (e) {
              P(!0);
            } finally {
              D(!1);
            }
          };
        return y
          ? (0, a.jsx)(d.Spinner, {})
          : (0, a.jsxs)(d.ModalRoot, {
              transitionState: f,
              "aria-label": m.default.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
              children: [
                (0, a.jsx)(d.ModalHeader, {
                  separator: !1,
                  className: h.modalHeader,
                  children: (0, a.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: h.header,
                    children:
                      m.default.Messages
                        .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_TITLE,
                  }),
                }),
                (0, a.jsx)(d.ModalContent, {
                  children: (0, a.jsxs)("div", {
                    className: h.container,
                    children: [
                      (0, a.jsx)("div", {
                        className: h.row,
                        children: (0, a.jsx)("div", {
                          ref: A,
                          className: h.roleSelectorContainer,
                          children: (0, a.jsx)(d.FocusRingScope, {
                            containerRef: A,
                            children: (0, a.jsx)(d.SearchableSelect, {
                              closeOnSelect: !1,
                              className: h.roleSelector,
                              maxVisibleItems: 5,
                              placeholder:
                                m.default.Messages
                                  .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_ROLE_INPUT_PLACEHOLDER,
                              multi: !0,
                              value: w,
                              options: g,
                              onChange: e => {
                                j(e);
                              },
                              renderOptionPrefix: e =>
                                null != e
                                  ? (0, a.jsx)(_, { rolesRow: C.get(e.value) })
                                  : null,
                            }),
                          }),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: h.row,
                        children: [
                          (0, a.jsx)(d.FormSwitch, {
                            value: I,
                            hideBorder: !0,
                            onChange: x,
                            className: h.switchGroup,
                            children:
                              m.default.Messages
                                .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_LET_EVERYONE_POST,
                          }),
                          (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children:
                              m.default.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_DESCRIPTION.format(),
                          }),
                        ],
                      }),
                      B
                        ? (0, a.jsx)("div", {
                            className: h.row,
                            children: (0, a.jsx)(d.Text, {
                              className: r(h.row, h.error),
                              variant: "text-sm/normal",
                              children:
                                m.default.Messages
                                  .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_ERROR,
                            }),
                          })
                        : null,
                    ],
                  }),
                }),
                (0, a.jsxs)(d.ModalFooter, {
                  className: h.footer,
                  children: [
                    (0, a.jsx)(d.Button, {
                      type: "submit",
                      color: d.Button.Colors.BRAND_NEW,
                      size: d.Button.Sizes.SMALL,
                      className: h.button,
                      onClick: F,
                      disabled: !b,
                      autoFocus: !0,
                      children: m.default.Messages.SAVE,
                    }),
                    (0, a.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      size: d.Button.Sizes.SMALL,
                      className: h.button,
                      onClick: M,
                      children: m.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
      };
    },
  },
]);
//# sourceMappingURL=eaf3481c89111163a7fc.js.map
