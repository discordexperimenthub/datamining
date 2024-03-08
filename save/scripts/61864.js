(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61864"],
  {
    462430: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          AddMembersBody: function () {
            return N;
          },
          MemberRoleSelector: function () {
            return j;
          },
          default: function () {
            return C;
          },
        }),
        l("222007"),
        l("424973");
      var s = l("37983"),
        n = l("884691"),
        a = l("446674"),
        i = l("77078"),
        r = l("318738"),
        o = l("137223"),
        d = l("233069"),
        c = l("42203"),
        u = l("26989"),
        S = l("305961"),
        h = l("145131"),
        m = l("476765"),
        R = l("361777"),
        E = l("944633"),
        f = l("599110"),
        x = l("404008"),
        T = l("651879"),
        g = l("655518"),
        y = l("454273"),
        p = l("355313"),
        A = l("606762"),
        M = l("49111"),
        b = l("782340"),
        w = l("129647");
      let L = (0, m.uid)();
      function v(e, t) {
        return t ? e.slice(1) : e;
      }
      function N(e) {
        let t,
          {
            guild: l,
            channel: i,
            permission: r,
            pendingAdditions: d,
            setPendingAdditions: c,
            isStageChannel: h = null != i && i.isGuildStageVoice(),
            description: m,
          } = e,
          [R, E] = n.useState(!1),
          [f, x] = n.useState(""),
          M = (0, a.useStateFromStores)([S.default], () =>
            S.default.getRoles(l.id)
          );
        function w(e) {
          let t = v(f.trim(), R),
            l = RegExp("".concat(g.default.escape(t)), "i");
          return l.test(e);
        }
        let L = (0, a.useStateFromStores)([u.default], () =>
          u.default.getMemberIds(l.id)
        );
        R
          ? (t = [])
          : h
            ? (t = y.getRolesRowsWithPermissionDisabled(l, M, i, r, w))
            : 0 === (t = y.getRolesRows(l, M, i, r, w)).length &&
              "" === f.trim() &&
              !y.hasCustomRoles(l, M) &&
              (t = y.getNoRolesRow());
        let N = y.getMembersRows(L, i, l, r, w),
          {
            placeholderText: C,
            hintText: _,
            renderEmptyText: I,
          } = (function () {
            return {
              placeholderText:
                b.default.Messages
                  .PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_PLACEHOLDER,
              hintText:
                b.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SUBTITLE,
              renderEmptyText: e =>
                b.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format(
                  { query: e }
                ),
            };
          })();
        return (0, s.jsx)(j, {
          pendingAdditions: d,
          query: f,
          onQueryChange: function (e) {
            let t = e.trim(),
              s = "@" === t.charAt(0);
            T.default.requestMembers(l.id, v(t, s), A.MEMBER_REQUEST_COUNT),
              x(e),
              E(s);
          },
          onClickRow: function (e) {
            let t = (0, p.getFullRowId)(e);
            c(l => {
              let s = { ...l };
              if (t in s) delete s[t];
              else {
                let l;
                e.rowType === A.RowType.ROLE ||
                e.rowType === A.RowType.ADMINISTRATOR
                  ? (l = {
                      type: o.RichTagTypes.ROLE,
                      label: e.name,
                      color: e.colorString,
                    })
                  : (e.rowType === A.RowType.MEMBER ||
                      e.rowType === A.RowType.OWNER) &&
                    (l = {
                      type: o.RichTagTypes.MEMBER,
                      label: e.name,
                      avatar: e.avatarURL,
                    }),
                  null != l && (s[t] = { display: l, row: e });
              }
              return s;
            });
          },
          onRemovePendingAddition: function (e) {
            c(t => {
              let { [e]: l, ...s } = t;
              return s;
            });
          },
          roles: t,
          members: N,
          placeholderText: C,
          hintText: _,
          renderEmptyText: I,
          isStageChannel: h,
          description: m,
        });
      }
      function j(e) {
        let t,
          {
            listClassName: l,
            pendingAdditions: n,
            query: a,
            onQueryChange: r,
            onClickRow: o,
            onRemovePendingAddition: d,
            roles: c,
            members: u,
            placeholderText: S,
            hintText: h,
            renderEmptyText: m,
            isStageChannel: R,
            focusSearchAfterReady: E,
            isReady: f,
            description: x,
          } = e;
        return (0, s.jsxs)("div", {
          className: w.content,
          children: [
            (null == (t = x) &&
              R &&
              (t =
                b.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION),
            null == t || "" === t)
              ? null
              : (0, s.jsx)(i.Text, {
                  color: "header-secondary",
                  className: w.description,
                  variant: "text-sm/normal",
                  children: t,
                }),
            (0, s.jsx)(p.default, {
              listClassName: l,
              pendingAdditions: n,
              query: a,
              onQueryChange: r,
              onClickRow: o,
              onRemovePendingAddition: d,
              roles: c,
              members: u,
              placeholderText: S,
              hintText: h,
              renderEmptyText: m,
              disabledText: R
                ? b.default.Messages
                    .CHANNEL_PERMISSIONS_ROLE_ALREADY_HAS_PERMISSIONS
                : null,
              focusSearchAfterReady: E,
              isReady: f,
            }),
          ],
        });
      }
      function C(e) {
        let {
            transitionState: t,
            onClose: l,
            channelId: o,
            newChannel: u,
            inSettings: m,
          } = e,
          [T, g] = n.useState(!1),
          [y, p] = n.useState({}),
          v = (0, a.useStateFromStores)(
            [c.default],
            () => c.default.getChannel(o),
            [o]
          ),
          j = (0, a.useStateFromStores)([S.default], () =>
            S.default.getGuild(null == v ? void 0 : v.getGuildId())
          );
        if (
          (n.useEffect(() => {
            f.default.track(M.AnalyticEvents.OPEN_MODAL, {
              type: "Grant Channel Access",
            });
          }, []),
          null == v || null == j)
        )
          return null;
        let C = u && 0 === Object.keys(y).length;
        async function _() {
          if (null == v || 0 === Object.keys(y).length) {
            l();
            return;
          }
          g(!0);
          try {
            await (function (e, t, l) {
              let s = [];
              return (
                Object.values(t).forEach(t => {
                  let { row: l } = t;
                  null != l.id &&
                    "" !== l.id &&
                    (l.rowType === A.RowType.ROLE
                      ? s.push((0, x.permissionOverwriteForRole)(l.id, e.type))
                      : l.rowType === A.RowType.MEMBER &&
                        s.push(
                          (0, x.permissionOverwriteForUser)(l.id, e.type)
                        ));
                }),
                (0, r.savePermissionUpdates)(e.id, s, l)
              );
            })(v, y, m),
              l(),
              g(!1);
          } catch (e) {
            g(!1);
          }
        }
        let I = (0, d.isGuildTextChannelType)(v.type) ? R.default : E.default;
        return (0, s.jsxs)(i.ModalRoot, {
          transitionState: t,
          size: i.ModalSize.SMALL,
          "aria-labelledby": L,
          className: w.modalRoot,
          children: [
            (0, s.jsxs)(i.ModalHeader, {
              separator: !1,
              direction: h.default.Direction.VERTICAL,
              align: h.default.Align.CENTER,
              className: w.header,
              children: [
                (0, s.jsx)(i.Heading, {
                  id: L,
                  variant: "heading-xl/semibold",
                  children:
                    b.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                }),
                (0, s.jsxs)(i.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: w.headerSubtitle,
                  children: [
                    (0, s.jsx)(I, {
                      height: 16,
                      width: 16,
                      className: w.headerSubtitleIcon,
                    }),
                    v.name,
                  ],
                }),
              ],
            }),
            (0, s.jsx)(N, {
              guild: j,
              channel: v,
              permission: v.accessPermissions,
              pendingAdditions: y,
              setPendingAdditions: p,
            }),
            (0, s.jsxs)(i.ModalFooter, {
              children: [
                !C &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(i.Button, {
                        onClick: _,
                        look: i.Button.Looks.FILLED,
                        size: i.Button.Sizes.SMALL,
                        className: w.button,
                        submitting: T,
                        children: b.default.Messages.DONE,
                      }),
                      (0, s.jsx)(i.Button, {
                        look: i.Button.Looks.LINK,
                        color: i.Button.Colors.TRANSPARENT,
                        onClick: l,
                        size: i.Button.Sizes.SMALL,
                        children: b.default.Messages.CANCEL,
                      }),
                    ],
                  }),
                C &&
                  (0, s.jsx)(i.Button, {
                    look: i.Button.Looks.FILLED,
                    color: i.Button.Colors.PRIMARY,
                    onClick: l,
                    size: i.Button.Sizes.SMALL,
                    children:
                      b.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SKIP,
                  }),
              ],
            }),
          ],
        });
      }
    },
    355313: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          getFullRowId: function () {
            return p;
          },
          default: function () {
            return b;
          },
        }),
        l("222007"),
        l("808653");
      var s = l("37983"),
        n = l("884691"),
        a = l("414456"),
        i = l.n(a),
        r = l("974667"),
        o = l("77078"),
        d = l("507453"),
        c = l("79798"),
        u = l("145131"),
        S = l("476263"),
        h = l("476765"),
        m = l("682344"),
        R = l("454273"),
        E = l("191458"),
        f = l("606762"),
        x = l("782340"),
        T = l("129647");
      let g = (0, h.uid)(),
        y = (0, h.uid)();
      function p(e) {
        return "".concat(e.rowType, ":").concat(e.id);
      }
      function A(e) {
        return (0, s.jsx)(
          o.FormTitle,
          { tag: "h5", className: i(T.sectionTitle, T.rowHeight), children: e },
          e
        );
      }
      function M(e) {
        let {
            id: t,
            children: l,
            rowLabel: n,
            checked: a,
            onSelect: d,
            disabled: c,
            showCheckbox: S,
            selected: h,
            onMouseEnter: m,
            "aria-posinset": R,
            "aria-setsize": E,
          } = e,
          f = (0, r.useListItem)(t);
        return (0, s.jsx)(o.Clickable, {
          ...f,
          id: t,
          className: i(T.addMemberRow, { [T.selectedRow]: h }),
          onClick: e => {
            !c && (e.preventDefault(), d());
          },
          onMouseEnter: m,
          role: "option",
          "aria-disabled": c,
          "aria-selected": a,
          "aria-setsize": E,
          "aria-posinset": R,
          children: (0, s.jsxs)(u.default, {
            justify: u.default.Justify.BETWEEN,
            align: u.default.Align.CENTER,
            children: [
              S
                ? (0, s.jsx)(o.Checkbox, {
                    displayOnly: !0,
                    size: 18,
                    value: a,
                    type: o.Checkbox.Types.INVERTED,
                    disabled: c,
                    children: (0, s.jsx)("div", {
                      className: T.checkboxLabel,
                      children: l,
                    }),
                  })
                : l,
              null != n
                ? (0, s.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: n,
                  })
                : null,
            ],
          }),
        });
      }
      function b(e) {
        let {
            listClassName: t,
            pendingAdditions: l,
            query: a,
            onQueryChange: r,
            onClickRow: h,
            onRemovePendingAddition: b,
            roles: w = [],
            members: L = [],
            users: v = [],
            guilds: N = [],
            placeholderText: j,
            disabledText: C,
            hintText: _,
            searchTitleText: I,
            renderEmptyText: O,
            focusSearchAfterReady: k,
            isReady: B,
            maxCount: D,
            hideRowLabel: P = !1,
          } = e,
          z = n.useRef(null),
          F = n.useRef(null),
          H = [w.length, L.length, v.length, N.length],
          [U, V] = n.useState(!1),
          [G, Y] = n.useState(0),
          [q, Q] = n.useState(-1);
        n.useEffect(() => {
          var e;
          null === (e = z.current) || void 0 === e || e.focus();
        }, []);
        let W = n.useCallback(function (e, t) {
            let l =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
            if ((Y(e), Q(t), l)) {
              var s;
              null === (s = F.current) ||
                void 0 === s ||
                s.scrollToIndex({
                  section: null != e ? e : 0,
                  row: null != t ? t : 0,
                  padding: 8,
                });
            }
          }, []),
          J = n.useCallback(
            (e, t) => {
              if (null == t) return;
              r("");
              let l = e === f.AudienceSelectorSections.ROLES ? w : [],
                s = l[t];
              s.rowType !== f.RowType.EMPTY_STATE && h(s);
            },
            [w, h, r]
          ),
          K = n.useCallback(
            e => {
              var t;
              null != e &&
                e.rowType !== f.RowType.EMPTY_STATE &&
                (h(e),
                r(""),
                null === (t = z.current) || void 0 === t || t.focus());
            },
            [h, r]
          ),
          Z = n.useMemo(() => Object.keys(l), [l]),
          X = n.useMemo(
            () =>
              L.some(e => !e.disabled) ||
              w.some(e => !e.disabled) ||
              v.some(e => !e.disabled) ||
              N.some(e => !e.disabled),
            [L, w, v, N]
          ),
          $ = X || "" === a.trim();
        function ee() {
          var e;
          V(
            !(null === (e = F.current) || void 0 === e
              ? void 0
              : e.isScrolledToTop()) && $
          );
        }
        return (
          n.useEffect(() => {
            ee();
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: i(T.searchBox, { [T.scrollSeparator]: U }),
                children: [
                  null != I &&
                    (0, s.jsx)(o.FormTitle, {
                      tag: o.FormTitleTags.H5,
                      children: I,
                    }),
                  (0, s.jsx)(E.default, {
                    ref: z,
                    query: a,
                    onQueryChange: r,
                    selectedSection: G,
                    selectedRow: q,
                    onSelectionChange: W,
                    onSelect: J,
                    tags: Z.map(e => l[e].display),
                    sections: H,
                    onRemoveTag: function (e) {
                      b(Z[e]);
                    },
                    placeholder: j,
                    focusAfterReady: k,
                    isReady: B,
                    "aria-labelledby": g,
                    "aria-controls": y,
                  }),
                  null != _
                    ? (0, s.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        children: _,
                      })
                    : null,
                ],
              }),
              $
                ? (0, s.jsx)(o.List, {
                    ref: F,
                    className: i(T.roleMemberList, t),
                    sections: H,
                    renderRow: e => {
                      let t,
                        n,
                        { section: a, row: r } = e,
                        d = null,
                        u = !1,
                        h = !1,
                        E = !1,
                        x = !u && null != D && Object.keys(l).length >= D;
                      switch (a) {
                        case f.AudienceSelectorSections.ROLES:
                          (u = (n = p((d = w[r]))) in l || d.disabled),
                            (h = d.disabled || x),
                            (E =
                              G === f.AudienceSelectorSections.ROLES &&
                              q === r),
                            (t = (0, s.jsxs)("div", {
                              className: T.rowBody,
                              children: [
                                (0, s.jsx)("div", {
                                  className: i(T.rowHeight, T.alignCenter),
                                  children: (0, s.jsx)(m.default, {
                                    color: d.colorString,
                                    height: 20,
                                  }),
                                }),
                                (0, s.jsxs)("div", {
                                  className: T.rowLabel,
                                  children: [
                                    (0, s.jsx)(o.Text, {
                                      variant: "text-sm/medium",
                                      className: T.rowTitle,
                                      color:
                                        d.rowType === f.RowType.EMPTY_STATE
                                          ? "text-muted"
                                          : "text-normal",
                                      children: d.name,
                                    }),
                                    d.disabled && null != C
                                      ? (0, s.jsx)(o.Text, {
                                          color: "header-secondary",
                                          variant: "text-xs/normal",
                                          children: C,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }));
                          break;
                        case f.AudienceSelectorSections.MEMBERS:
                          (u = (n = p((d = L[r]))) in l || d.disabled),
                            (h = d.disabled || x),
                            (E =
                              G === f.AudienceSelectorSections.MEMBERS &&
                              q === r),
                            (t = (0, s.jsxs)("div", {
                              className: T.rowBody,
                              children: [
                                (0, s.jsx)(o.Avatar, {
                                  src: d.avatarURL,
                                  size: o.AvatarSizes.SIZE_24,
                                  "aria-label": "",
                                }),
                                (0, s.jsx)(o.Text, {
                                  className: T.rowLabel,
                                  variant: "text-sm/normal",
                                  children: d.name,
                                }),
                                null != d.nickname
                                  ? (0, s.jsx)(o.Text, {
                                      color: "text-muted",
                                      className: T.rowLabelSubText,
                                      variant: "text-sm/normal",
                                      "aria-hidden": !0,
                                      children: d.username,
                                    })
                                  : null,
                                d.bot &&
                                  (0, s.jsx)(c.default, {
                                    verified: d.verifiedBot,
                                  }),
                              ],
                            }));
                          break;
                        case f.AudienceSelectorSections.USERS:
                          (u = (n = p((d = v[r]))) in l || d.disabled),
                            (h = d.disabled || x),
                            (E =
                              G === f.AudienceSelectorSections.USERS &&
                              q === r),
                            (t = (0, s.jsxs)("div", {
                              className: T.rowBody,
                              children: [
                                (0, s.jsx)(o.Avatar, {
                                  src: d.avatarURL,
                                  size: o.AvatarSizes.SIZE_24,
                                  "aria-label": "",
                                }),
                                (0, s.jsxs)("div", {
                                  className: T.rowLabel,
                                  children: [
                                    (0, s.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children: d.name,
                                    }),
                                    d.disabled && null != C
                                      ? (0, s.jsx)(o.Text, {
                                          color: "header-secondary",
                                          variant: "text-xs/normal",
                                          children: C,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }));
                          break;
                        case f.AudienceSelectorSections.GUILDS:
                          (u = (n = p((d = N[r]))) in l || d.disabled),
                            (h = d.disabled || x),
                            (E =
                              G === f.AudienceSelectorSections.GUILDS &&
                              q === r),
                            (t = (0, s.jsxs)("div", {
                              className: T.rowBody,
                              children: [
                                (0, s.jsx)(S.default, {
                                  guild: d.guild,
                                  active: !0,
                                  size: S.default.Sizes.SMALLER,
                                }),
                                (0, s.jsx)("div", {
                                  className: T.rowLabel,
                                  children: (0, s.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: d.name,
                                  }),
                                }),
                              ],
                            }));
                      }
                      return null == d
                        ? null
                        : (0, s.jsx)(
                            M,
                            {
                              id: "user-row-".concat(r),
                              rowLabel: P ? null : R.getRowTypeLabel(d.rowType),
                              checked: u,
                              disabled: h,
                              onSelect: () => K(d),
                              showCheckbox: d.rowType !== f.RowType.EMPTY_STATE,
                              onMouseEnter: () => W(a, r, !1),
                              selected: E,
                              "aria-posinset": r + 1,
                              "aria-setsize": H.reduce((e, t) => e + t, 0),
                              children: t,
                            },
                            n
                          );
                    },
                    rowHeight: 40,
                    renderSection: e => {
                      let { section: t } = e;
                      switch (t) {
                        case f.AudienceSelectorSections.ROLES:
                          return A(x.default.Messages.ROLES);
                        case f.AudienceSelectorSections.MEMBERS:
                          return A(x.default.Messages.MEMBERS);
                        case f.AudienceSelectorSections.USERS:
                          return A(x.default.Messages.USERS);
                        case f.AudienceSelectorSections.GUILDS:
                          return A(x.default.Messages.SERVERS);
                      }
                    },
                    sectionHeight: 32,
                    onScroll: ee,
                    role: void 0,
                    innerRole: "listbox",
                    innerId: y,
                    innerAriaMultiselectable: !0,
                    innerAriaOrientation: "vertical",
                  })
                : (0, s.jsxs)(u.default, {
                    className: t,
                    align: u.default.Align.CENTER,
                    justify: u.default.Justify.CENTER,
                    direction: u.default.Direction.VERTICAL,
                    children: [
                      (0, s.jsx)(d.default, { className: T.noResultIcon }),
                      (0, s.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: O(a),
                      }),
                    ],
                  }),
            ],
          })
        );
      }
    },
    191458: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var s = l("37983"),
        n = l("884691"),
        a = l("137223"),
        i = l("278243");
      let r = n.forwardRef(function (e, t) {
        let {
          query: l,
          onQueryChange: n,
          onRemoveTag: r,
          onSelect: o,
          onSelectionChange: d,
          selectedSection: c,
          selectedRow: u,
          tags: S,
          sections: h,
          placeholder: m = "",
          focusAfterReady: R,
          isReady: E,
          "aria-labelledby": f,
          "aria-controls": x,
        } = e;
        return (0, s.jsx)(a.default, {
          autoFocus: !0,
          className: i.searchBar,
          maxHeight: 100,
          onQueryChange: n,
          onRemoveTag: r,
          selectedSection: c,
          selectedRow: u,
          onSelect: o,
          onSelectionChange: d,
          placeholder: 0 === S.length ? m : "",
          query: l,
          ref: t,
          size: a.default.Sizes.MEDIUM,
          tags: S,
          sections: h,
          focusAfterReady: R,
          isReady: E,
          inputProps: {
            "aria-labelledby": f,
            "aria-controls": x,
            "aria-expanded": !0,
            "aria-activedescendant": "user-row-".concat(u),
          },
        });
      });
      var o = r;
    },
  },
]);
//# sourceMappingURL=787940d3de12b1c86c86.js.map
