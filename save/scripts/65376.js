(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65376"],
  {
    609789: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        }),
        s("222007");
      var l = s("37983"),
        a = s("884691"),
        i = s("414456"),
        n = s.n(i),
        o = s("627445"),
        r = s.n(o),
        d = s("446674"),
        u = s("77078"),
        c = s("851387"),
        h = s("305961"),
        m = s("145131"),
        C = s("810567"),
        I = s("124299"),
        M = s("892692"),
        f = s("581511"),
        N = s("317041"),
        b = s("782340"),
        x = s("147167");
      function g(e) {
        let {
            editPermissions: t,
            guildId: s,
            hasMemberSearch: i,
            headerText: o,
            onClose: g,
            overwrittenKeys: p,
            search: S,
            searchPlaceholderText: k,
            selectedPermissionCount: A,
            transitionState: j,
          } = e,
          y = (0, d.useStateFromStores)(
            [h.default],
            () => h.default.getGuild(s),
            [s]
          );
        r(null != y, "");
        let [T, P] = a.useState(null),
          { query: E, results: O, setQuery: _ } = S(s),
          [R, D] = a.useState({}),
          L = a.useMemo(() => Object.keys(R).length, [R]),
          v = L + A >= N.APPLICATION_COMMAND_PERMISSIONS_LIMIT,
          w = a.useMemo(
            () =>
              O.filter(e => {
                let t = (0, M.toPermissionKey)(e.id, e.type);
                return !p.includes(t);
              }),
            [p, O]
          ),
          B = a.useCallback(
            (e, t) => {
              D(s => {
                let l = (0, M.toPermissionKey)(e, t),
                  a = { ...s };
                return (
                  l in s
                    ? delete a[l]
                    : !v && (a[l] = { id: e, permission: !0, type: t }),
                  a
                );
              });
            },
            [v, D]
          ),
          H = a.useCallback(() => {
            t(R, []), g();
          }, [t, g, R]);
        a.useEffect(() => () => clearTimeout(T), [T]);
        let K = a.useCallback(
            e => {
              _(e),
                i &&
                  P(t =>
                    (clearTimeout(t), 0 === e.length)
                      ? null
                      : setTimeout(() => {
                          c.default.requestMembers(s, e, 200, !1);
                        }, 500)
                  );
            },
            [s, i, _, P]
          ),
          q = a.useCallback(
            e => {
              let t = w[e],
                s = (0, M.toPermissionKey)(t.id, t.type),
                a = s in R,
                i = v && !a;
              return (0, l.jsx)(
                "div",
                {
                  className: x.item,
                  children: (0, l.jsx)(u.Checkbox, {
                    type: u.Checkbox.Types.INVERTED,
                    className: n({ [x.checkboxItemDisabled]: i }),
                    disabled: i,
                    value: a,
                    onChange: () => B(t.id, t.type),
                    children: (0, l.jsx)(f.default, {
                      guild: y,
                      id: t.id,
                      type: t.type,
                      isLocked: !1,
                    }),
                  }),
                },
                s
              );
            },
            [w, y, v, B, R]
          );
        return (
          a.useEffect(() => {
            c.default.requestMembers(s, void 0, 200, !1);
          }, [s]),
          (0, l.jsxs)(u.ModalRoot, {
            "aria-label":
              b.default.Messages
                .INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,
            transitionState: j,
            children: [
              (0, l.jsxs)(u.ModalHeader, {
                separator: !1,
                direction: m.default.Direction.VERTICAL,
                children: [
                  (0, l.jsx)(u.Heading, {
                    variant: "heading-xl/semibold",
                    className: x.header,
                    children: o,
                  }),
                  v
                    ? (0, l.jsx)(u.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-danger",
                        children:
                          b.default.Messages
                            .INTEGRATIONS_APPLICATION_PERMISSIONS_MAX,
                      })
                    : null,
                ],
              }),
              (0, l.jsxs)(u.ModalContent, {
                className: x.modalContent,
                children: [
                  (0, l.jsx)(C.default, {
                    className: x.searchBar,
                    query: E,
                    placeholder: k,
                    "aria-label": k,
                    onChange: K,
                    onClear: () => _(""),
                    size: C.default.Sizes.MEDIUM,
                  }),
                  (0, l.jsx)(I.default, {
                    role: "listbox",
                    renderRow: q,
                    rowCount: w.length,
                    rowCountBySection: [w.length],
                    rowHeight: 36,
                    className: x.list,
                  }),
                ],
              }),
              (0, l.jsxs)(u.ModalFooter, {
                children: [
                  (0, l.jsx)(u.Button, {
                    type: "submit",
                    onClick: H,
                    disabled: 0 === L,
                    children: b.default.Messages.ADD,
                  }),
                  (0, l.jsx)(u.Button, {
                    onClick: g,
                    look: u.Button.Looks.LINK,
                    color: u.Button.Colors.PRIMARY,
                    children: b.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=66ce986f5fa149c9cb18.js.map
