(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70555"],
  {
    744581: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          AddRoleMembersModalContent: function () {
            return B;
          },
          default: function () {
            return S;
          },
        }),
        l("222007");
      var s = l("37983"),
        a = l("884691"),
        o = l("509043"),
        r = l("446674"),
        n = l("77078"),
        i = l("137223"),
        d = l("462430"),
        u = l("355313"),
        c = l("145131"),
        R = l("682344"),
        m = l("651879"),
        M = l("158998"),
        E = l("895026"),
        f = l("592407"),
        h = l("531493"),
        C = l("986654"),
        L = l("49111"),
        b = l("606762"),
        x = l("680894"),
        _ = l("782340"),
        g = l("889071");
      function B(e) {
        var t;
        let {
            onClose: l,
            roleId: B,
            guildId: S,
            onBack: A,
            isCreateRoleFlow: k,
            focusSearchAfterReady: T,
            isReady: v,
          } = e,
          I = (0, r.useStateFromStores)(
            [h.default],
            () => h.default.getRole(B),
            [B]
          ),
          [j, p] = a.useState(""),
          [y, D] = a.useState({}),
          [N, O] = a.useState(!1);
        a.useEffect(() => {
          m.default.requestMembers(
            S,
            j.trim().toLowerCase(),
            C.ADD_MEMBER_QUERY_LIMIT
          );
        }, [S, j]);
        let w = a.useCallback(e => !e.roles.includes(B), [B]),
          U = (0, C.useGuildMembers)(S, w),
          F = a.useMemo(
            () => U.filter(e => (0, C.filterFullMembersByQuery)(j, e)),
            [j, U]
          );
        F = F.filter(e => e.id !== x.CLYDE_AI_USER_ID);
        let z = a.useCallback(async () => {
            let e = Object.values(y).map(e => e.row.id);
            O(!0);
            try {
              await f.default.bulkAddMemberRoles(S, B, e),
                (0, E.requestMembersForRole)(S, B, !1),
                l();
            } catch (e) {
              O(!1);
            }
          }, [S, B, y, l]),
          Y = a.useCallback(e => {
            D(t => {
              let l = { ...t },
                s = (0, u.getFullRowId)(e);
              return s in l
                ? (delete l[s], l)
                : ((l[s] = {
                    display: {
                      type: i.RichTagTypes.MEMBER,
                      label: e.name,
                      avatar: e.avatarURL,
                    },
                    row: e,
                  }),
                  l);
            });
          }, []),
          P = a.useCallback(e => {
            D(t => {
              let { [e]: l, ...s } = t;
              return s;
            });
          }, []),
          K = a.useMemo(
            () =>
              F.map(e => {
                var t;
                let l = M.default.getUserTag(e.user);
                return {
                  rowType: b.RowType.MEMBER,
                  name: null !== (t = e.name) && void 0 !== t ? t : l,
                  nickname: e.name,
                  username: l,
                  id: e.id,
                  avatarURL: e.avatarURL,
                  bot: e.bot,
                  verifiedBot: e.verifiedBot,
                  disabled: !1,
                  key: e.id,
                };
              }),
            [F]
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(n.ModalHeader, {
              className: g.header,
              separator: !1,
              direction: c.default.Direction.VERTICAL,
              children: [
                (0, s.jsx)(n.Heading, {
                  variant: "heading-xl/semibold",
                  children: _.default.Messages.ROLE_ADD_MEMBERS_TITLE,
                }),
                k
                  ? (0, s.jsx)(n.Text, {
                      className: g.subtitle,
                      color: "text-normal",
                      variant: "text-md/normal",
                      children:
                        _.default.Messages.ROLE_CREATE_ADD_MEMBERS_SUBTITLE,
                    })
                  : (0, s.jsxs)("div", {
                      className: g.roleContainer,
                      children: [
                        (0, s.jsx)(R.default, {
                          color:
                            null !== (t = null == I ? void 0 : I.colorString) &&
                            void 0 !== t
                              ? t
                              : (0, o.int2hex)(L.DEFAULT_ROLE_COLOR),
                          width: 16,
                          height: 16,
                        }),
                        (0, s.jsx)(n.Text, {
                          className: g.roleName,
                          color: "text-normal",
                          variant: "text-md/normal",
                          children: null == I ? void 0 : I.name,
                        }),
                      ],
                    }),
              ],
            }),
            (0, s.jsx)(d.MemberRoleSelector, {
              listClassName: g.list,
              pendingAdditions: y,
              query: j,
              onQueryChange: p,
              onClickRow: Y,
              onRemovePendingAddition: P,
              roles: [],
              members: K,
              placeholderText: _.default.Messages.ROLE_ADD_MEMBERS_SEARCH,
              renderEmptyText: e =>
                _.default.Messages.ROLE_EDIT_MEMBERS_NO_RESULTS.format({
                  query: e,
                }),
              focusSearchAfterReady: T,
              isReady: v,
            }),
            (0, s.jsxs)(n.ModalFooter, {
              className: g.footer,
              children: [
                (0, s.jsxs)("div", {
                  className: g.buttonsRight,
                  children: [
                    k && 0 === Object.keys(y).length
                      ? (0, s.jsx)(n.Button, {
                          onClick: l,
                          color: n.Button.Colors.PRIMARY,
                          children: _.default.Messages.ROLE_CREATION_SKIP,
                        })
                      : (0, s.jsx)(n.Button, {
                          onClick: z,
                          submitting: N,
                          children: _.default.Messages.ADD,
                        }),
                    !k &&
                      (0, s.jsx)(n.Button, {
                        look: n.Button.Looks.LINK,
                        color: n.Button.Colors.PRIMARY,
                        size: n.Button.Sizes.SMALL,
                        onClick: l,
                        children: _.default.Messages.CANCEL,
                      }),
                  ],
                }),
                null != A &&
                  (0, s.jsx)(n.Button, {
                    color: n.Button.Colors.PRIMARY,
                    look: n.Button.Looks.LINK,
                    size: n.Button.Sizes.TINY,
                    onClick: A,
                    className: g.backButton,
                    children: _.default.Messages.BACK,
                  }),
              ],
            }),
          ],
        });
      }
      function S(e) {
        let { transitionState: t, onClose: l, roleId: a, guildId: o } = e;
        return (0, s.jsx)(n.ModalRoot, {
          transitionState: t,
          size: n.ModalSize.SMALL,
          children: (0, s.jsx)(B, { onClose: l, roleId: a, guildId: o }),
        });
      }
    },
  },
]);
//# sourceMappingURL=38a529b44a630b83c9b7.js.map
