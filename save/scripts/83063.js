(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83063"],
  {
    351105: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return n;
          },
        });
      var o = r("872717"),
        a = r("49111"),
        n = {
          async updateEstimate(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 7,
              r = arguments.length > 2 ? arguments[2] : void 0,
              n = await o.default.get({
                url: a.Endpoints.GUILD_PRUNE(e),
                query: { days: t, include_roles: r },
                oldFormErrors: !0,
              });
            return n.body.pruned;
          },
          prune: (e, t, r) =>
            o.default.post({
              url: a.Endpoints.GUILD_PRUNE(e),
              body: { days: t, compute_prune_count: !1, include_roles: r },
              oldFormErrors: !0,
            }),
        };
    },
    494440: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        }),
        r("222007");
      var o = r("37983"),
        a = r("884691"),
        n = r("917351"),
        l = r.n(n),
        s = r("446674"),
        i = r("77078"),
        u = r("351105"),
        d = r("581583"),
        c = r("454273"),
        p = r("957255"),
        h = r("414943"),
        v = r("782340"),
        g = r("418563"),
        f = e => {
          let { guild: t, transitionState: r, onClose: n } = e,
            [f, m] = a.useState(7),
            [b, E] = a.useState(null),
            [x, S] = a.useState([]),
            M = a.useCallback(async () => {
              E(null);
              let e = await u.default.updateEstimate(t.id, f, x);
              E(e);
            }, [f, t.id, x]);
          a.useEffect(() => {
            M();
          }, [M]);
          let R = (0, s.useStateFromStoresArray)(
            [p.default],
            () => {
              let e = p.default.getHighestRole(t);
              return l(t.roles)
                .sortBy(e => e.position)
                .filter(e => !(0, c.isEveryoneRoleId)(t.id, e.id))
                .filter(r => p.default.isRoleHigher(t, e, r))
                .value()
                .map(e => {
                  let { id: t, name: r } = e;
                  return { label: r, value: t };
                });
            },
            [t]
          );
          return (0, o.jsxs)(i.ModalRoot, {
            transitionState: r,
            children: [
              (0, o.jsx)(i.ModalHeader, {
                separator: !1,
                children: (0, o.jsxs)(i.Heading, {
                  variant: "heading-lg/semibold",
                  children: [
                    v.default.Messages.PRUNE_MEMBERS,
                    "—",
                    null != t ? t.toString() : "",
                  ],
                }),
              }),
              (0, o.jsxs)("div", {
                className: g.content,
                children: [
                  (0, o.jsx)(i.FormItem, {
                    title: v.default.Messages.FORM_LABEL_LAST_SEEN,
                    children: (0, o.jsx)(i.RadioGroup, {
                      value: f,
                      options: [
                        {
                          name: v.default.Messages.LAST_SEEN.format({
                            days: 7,
                          }),
                          value: 7,
                        },
                        {
                          name: v.default.Messages.LAST_SEEN.format({
                            days: 30,
                          }),
                          value: 30,
                        },
                      ],
                      onChange: e => {
                        let { value: t } = e;
                        m(t);
                      },
                      className: g.spacing,
                    }),
                  }),
                  (0, o.jsx)(i.FormItem, {
                    title: v.default.Messages.PRUNE_WITH_ROLES,
                    children: (0, o.jsx)(h.default, {
                      isMulti: !0,
                      options: R,
                      onChange: e => {
                        S(e.map(e => e.value));
                      },
                      value: x,
                      multiValueRenderer: e => {
                        let { value: r } = e,
                          a = t.getRole(r);
                        if (null == a) return null;
                        let n = x.indexOf(r);
                        return (0, o.jsx)(d.MemberRole, {
                          className: g.role,
                          role: a,
                          canRemove: !0,
                          onRemove: () => {
                            S([...x.slice(0, n), ...x.slice(n + 1)]);
                          },
                          onMouseDown: e => {
                            e.stopPropagation(), e.preventDefault();
                          },
                          guildId: t.id,
                        });
                      },
                      maxMenuHeight: 200,
                    }),
                  }),
                  (0, o.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: g.spacing,
                    children:
                      x.length > 0
                        ? v.default.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format(
                            { members: b, days: f }
                          )
                        : v.default.Messages.FORM_HELP_LAST_SEEN_1.format({
                            members: b,
                            days: f,
                          }),
                  }),
                ],
              }),
              (0, o.jsxs)(i.ModalFooter, {
                children: [
                  (0, o.jsx)(i.Button, {
                    onClick: () => {
                      u.default.prune(t.id, f, x), n();
                    },
                    children: v.default.Messages.PRUNE,
                  }),
                  (0, o.jsx)(i.Button, {
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    onClick: n,
                    children: v.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          });
        };
    },
    414943: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          DEFAULT_SELECT_STYLES: function () {
            return f;
          },
          default: function () {
            return n;
          },
        }),
        r("222007");
      var o,
        a,
        n,
        l,
        s = r("37983"),
        i = r("884691"),
        u = r("414456"),
        d = r.n(u),
        c = r("773392"),
        p = r("77078"),
        h = r("49111"),
        v = r("782340"),
        g = r("852968");
      ((l = a || (a = {})).TOP = "top"), (l.BOTTOM = "bottom");
      let f = {
        container: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            cursor: r ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: r, menuIsOpen: o } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: r ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: o ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: r ? "not-allowed" : void 0,
            pointerEvents: r ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: r ? 0.5 : 1,
          };
        },
        input: e => ({ ...e, color: "var(--interactive-normal)" }),
        menu: e => ({
          ...e,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: r ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: e => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: r ? void 0 : "pointer",
            opacity: r ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: r ? 0.3 : 1,
            },
          };
        },
        menuList: e => ({
          ...e,
          padding: 0,
          "&::-webkit-scrollbar": { width: 8, padding: "0px 2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--scrollbar-thin-thumb)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        }),
        option: (e, t) => {
          let { isSelected: r, isFocused: o } = t;
          return {
            ...e,
            ...(r
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : o
                ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)",
                  }),
            cursor: "pointer",
            display: "flex",
            padding: 12,
            alignItems: "center",
            minHeight: 40,
            "&:active": {
              backgroundColor: "var(--background-modifier-selected)",
              color: "var(--interactive-active)",
            },
          };
        },
        placeholder: e => ({ ...e, color: "var(--text-muted)" }),
      };
      ((o = class extends i.Component {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: r,
              error: o,
              valueRenderer: a,
              optionRenderer: n,
              multiValueRenderer: l,
              options: i,
              value: u,
              autofocus: h,
              disabled: m,
              clearable: b,
              searchable: E,
              styleOverrides: x,
              isMulti: S,
              placeholder: M,
              filterOption: R,
              closeMenuOnSelect: _ = !0,
              ...y
            } = this.props,
            C = { ...y };
          null != h && (C.autoFocus = h),
            null != m && (C.isDisabled = m),
            null != b && (C.isClearable = b),
            null != E && (C.isSearchable = E);
          let k = { IndicatorSeparator: () => null };
          null != n &&
            (k.Option = e =>
              (0, s.jsx)(c.components.Option, { ...e, children: n(e.data) })),
            null != a &&
              (k.SingleValue = e =>
                (0, s.jsx)(c.components.SingleValue, {
                  ...e,
                  children: a(e.data),
                })),
            null != l && (k.MultiValue = e => l(e.data));
          let O = null != x ? x : f;
          if (S && Array.isArray(u)) {
            let t = {};
            i.forEach(e => {
              t[String(e.value)] = e;
            }),
              (e = u.map(e => t[String(e)]));
          } else e = null != u ? i.find(e => e.value === u) : null;
          return (0, s.jsx)(p.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, s.jsxs)("div", {
              className: d(g.select, t, { [g.error]: null != o }),
              ref: this._containerRef,
              children: [
                (0, s.jsx)(c.default, {
                  ...C,
                  className: r,
                  ref: this._selectRef,
                  isMulti: S,
                  components: k,
                  options: i,
                  styles: O,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: _,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != M ? M : v.default.Messages.SELECT,
                  noOptionsMessage: () => v.default.Messages.NO_RESULTS_FOUND,
                  filterOption: R,
                }),
                null != o
                  ? (0, s.jsx)("div", {
                      className: g.errorMessage,
                      children: o,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this._selectRef = i.createRef()),
            (this._containerRef = i.createRef()),
            (this.state = { isFocused: !1, isOpen: !1 }),
            (this.handleFocus = e => {
              var t, r;
              this.setState({ isFocused: !0 }),
                null === (t = (r = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(r, e);
            }),
            (this.handleBlur = e => {
              var t, r;
              this.setState({ isFocused: !1 }),
                null === (t = (r = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(r, e);
            }),
            (this.handleKeyDown = e => {
              e.which === h.KeyboardKeys.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            (this.handleMenuOpen = () => {
              this.setState({ isOpen: !0 });
            }),
            (this.handleMenuClose = () => {
              this.setState({ isOpen: !1 });
            });
        }
      }).MenuPlacements = a),
        (n = o);
    },
  },
]);
//# sourceMappingURL=43a222df8cc8df6e10b1.js.map
