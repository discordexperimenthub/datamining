(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47185"],
  {
    126623: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
          useCustomizeCommunityPromptHelpText: function () {
            return m;
          },
        });
      var a = l("446674"),
        n = l("679653"),
        o = l("42203"),
        r = l("27618"),
        i = l("697218"),
        s = l("449008"),
        u = l("782340");
      function d(e, t, l) {
        return 0 === e.length
          ? ""
          : (l
              ? u.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES_ALSO
              : u.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES
            ).format({
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: t,
            });
      }
      function c(e) {
        let {
            guild: t,
            prompt: l,
            selectedRoleIds: c,
            selectedChannelIds: m,
            itemHook: f,
          } = e,
          h = (0, a.useStateFromStoresArray)(
            [o.default, i.default, r.default],
            () =>
              Array.from(m)
                .map(e => o.default.getChannel(e))
                .filter(s.isNotNullish)
                .map(e =>
                  (0, n.computeChannelName)(e, i.default, r.default, !0)
                )
          ),
          v = Array.from(c)
            .map(e => {
              var l, a;
              return null ===
                (l = (
                  null !== (a = null == t ? void 0 : t.roles) && void 0 !== a
                    ? a
                    : {}
                )[e]) || void 0 === l
                ? void 0
                : l.name;
            })
            .filter(s.isNotNullish)
            .map(e => "@".concat(e)),
          g = (null == l ? void 0 : l.singleSelect)
            ? ""
            : u.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS,
          x = "";
        if (0 === h.length && v.length > 0) g = d(v, f);
        else if (h.length > 0) {
          var p, C;
          (p = h),
            (C = f),
            (g =
              0 === p.length
                ? ""
                : u.default.Messages.ONBOARDING_HELP_TEXT_ADD_CHANNELS.format({
                    count: p.length,
                    extraCount: Math.max(p.length - 2, 0),
                    channel1: p[0],
                    channel2: p[1],
                    itemHook: C,
                  })),
            v.length > 0 && (x = d(v, f, !0));
        }
        return { helpText: g, helpTextAdditional: x };
      }
      function m(e) {
        let {
            guild: t,
            prompt: l,
            selectedRoleIds: d,
            selectedChannelIds: c,
            itemHook: m,
          } = e,
          f = (0, a.useStateFromStoresArray)(
            [o.default, i.default, r.default],
            () =>
              Array.from(c)
                .map(e => o.default.getChannel(e))
                .filter(s.isNotNullish)
                .map(e =>
                  (0, n.computeChannelName)(e, i.default, r.default, !0)
                )
          ),
          h = Array.from(d)
            .map(e => {
              var l, a;
              return null ===
                (l = (
                  null !== (a = null == t ? void 0 : t.roles) && void 0 !== a
                    ? a
                    : {}
                )[e]) || void 0 === l
                ? void 0
                : l.name;
            })
            .filter(s.isNotNullish)
            .map(e => "@".concat(e)),
          v = (null == l ? void 0 : l.singleSelect)
            ? ""
            : u.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS;
        return (
          0 === f.length && h.length > 0
            ? (v = u.default.Messages.CUSTOMIZE_COMMUNITY_ADD_ROLES.format({
                count: h.length,
                extraCount: Math.max(h.length - 2, 0),
                role1: h[0],
                role2: h[1],
                itemHook: m,
              }))
            : f.length > 0 && 0 === h.length
              ? (v = u.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS.format(
                  {
                    count: f.length,
                    extraCount: Math.max(f.length - 2, 0),
                    channel1: f[0],
                    channel2: f[1],
                    itemHook: m,
                  }
                ))
              : f.length > 0 &&
                h.length > 0 &&
                (v =
                  u.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS_AND_ROLES.format(
                    {
                      channelCount: f.length,
                      extraChannelCount: Math.max(f.length - 2, 0),
                      channel1: f[0],
                      channel2: f[1],
                      itemHook: m,
                      roleCount: h.length,
                      extraRoleCount: Math.max(h.length - 2, 0),
                      role1: h[0],
                      role2: h[1],
                    }
                  )),
          { helpText: v, helpTextAdditional: "" }
        );
      }
    },
    667712: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return N;
          },
        }),
        l("222007");
      var a = l("37983"),
        n = l("884691"),
        o = l("414456"),
        r = l.n(o),
        i = l("907002"),
        s = l("65597"),
        u = l("669491"),
        d = l("819855"),
        c = l("77078"),
        m = l("430568"),
        f = l("841098"),
        h = l("385976"),
        v = l("795228"),
        g = l("695284"),
        x = l("956089"),
        p = l("782340"),
        C = l("360613");
      function N(e) {
        let {
            guildId: t,
            option: l,
            selected: o,
            onSelect: N,
            hideMemberCount: j,
            canBeNew: _,
          } = e,
          O = (0, d.isThemeDark)((0, f.default)()),
          [T, M] = n.useState(!1),
          A = T && !j,
          I = n.useRef(null),
          { reducedMotion: E } = n.useContext(
            c.AccessibilityPreferencesContext
          ),
          b = (0, s.default)([h.default], () => {
            var e, t, a, n;
            return (
              (null === (e = l.emoji) || void 0 === e ? void 0 : e.id) !=
                null &&
              null !==
                (n =
                  null ===
                    (t = h.default.getCustomEmojiById(
                      null === (a = l.emoji) || void 0 === a ? void 0 : a.id
                    )) || void 0 === t
                    ? void 0
                    : t.animated) &&
              void 0 !== n &&
              n
            );
          }),
          S = (0, v.default)(t, 1e3),
          D =
            null == S || null == l.roleIds
              ? 0
              : Math.max(...l.roleIds.map(e => S[e])),
          L = _ && !o && l.isUnseen,
          k = (0, i.useSpring)({
            transform: o || E.enabled ? "scale(1)" : "scale(0.7)",
            opacity: o ? 1 : 0,
            config: { duration: 150 },
          }),
          y = (0, c.useToken)(u.default.colors.BACKGROUND_MODIFIER_ACCENT),
          R = (0, c.useToken)(u.default.unsafe_rawColors.BRAND_500),
          w = (0, i.useSpring)({
            from: { color: R.spring() },
            color: y.spring({ opacity: O ? 0.5 : 0.25 }),
            config: { duration: 300 },
            delay: 500,
          }),
          B = (0, i.useTransition)(A, {
            from: {
              transform: E.enabled ? "translateX(0)" : "translateX(8px)",
              opacity: 0,
            },
            enter: { transform: "translateX(0)", opacity: 1 },
            leave: { opacity: 0 },
            trail: 400,
            config: { duration: 150 },
          }),
          [P, U] = n.useState(!1);
        n.useEffect(() => {
          if (A)
            return (
              (I.current = setTimeout(() => {
                M(!1), (I.current = null);
              }, 3e3)),
              () => {
                null != I.current && clearTimeout(I.current);
              }
            );
        }, [A]);
        let H = r(C.optionButtonWrapper, { [C.selected]: o, [C.pressed]: P }),
          G = L ? { borderColor: w.color } : {};
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(i.animated.div, {
            style: G,
            className: H,
            children: (0, a.jsxs)(c.Clickable, {
              className: r(C.optionButton),
              onClick: () => {
                M(!o), N(!o);
              },
              onMouseDown: () => U(!0),
              onMouseUp: () => U(!1),
              children: [
                null != l.emoji && (null != l.emoji.id || null != l.emoji.name)
                  ? (0, a.jsx)(m.default, {
                      animated: l.emoji.animated || b,
                      className: C.buttonEmoji,
                      emojiId: l.emoji.id,
                      emojiName: l.emoji.name,
                    })
                  : null,
                (0, a.jsxs)("div", {
                  className: C.buttonText,
                  children: [
                    (0, a.jsx)(c.Text, {
                      variant: "text-md/medium",
                      color: "header-primary",
                      children: l.title,
                    }),
                    l.description.length > 0
                      ? (0, a.jsx)(c.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: l.description,
                        })
                      : null,
                  ],
                }),
                (0, a.jsx)(i.animated.div, {
                  className: C.checkIcon,
                  style: k,
                  children: (0, a.jsx)(g.default, {
                    width: 10,
                    height: 10,
                    color: u.default.unsafe_rawColors.WHITE_500.css,
                  }),
                }),
                B(
                  (e, t) =>
                    D > 0 &&
                    t &&
                    (0, a.jsx)(i.animated.div, {
                      className: C.memberCount,
                      style: e,
                      children: (0, a.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children:
                          p.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format(
                            { memberCount: D }
                          ),
                      }),
                    })
                ),
                L &&
                  (0, a.jsx)(x.TextBadge, {
                    color: u.default.unsafe_rawColors.BRAND_260.css,
                    text: p.default.Messages.NEW,
                    className: C.newBadge,
                  }),
              ],
            }),
          }),
        });
      }
    },
    469242: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return x;
          },
        }),
        l("222007");
      var a = l("37983"),
        n = l("884691"),
        o = l("448105"),
        r = l.n(o),
        i = l("669491"),
        s = l("77078"),
        u = l("430568"),
        d = l("414943"),
        c = l("945330"),
        m = l("956089"),
        f = l("782340"),
        h = l("210820");
      function v(e) {
        return null != e && (null != e.id || null != e.name);
      }
      let g = {
        ...d.DEFAULT_SELECT_STYLES,
        control: (e, t) => {
          let { isDisabled: l, menuIsOpen: a } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: l ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: a ? "8px 8px 0 0" : "8px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: l ? "not-allowed" : void 0,
            pointerEvents: l ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        valueContainer: e => ({
          ...e,
          padding: "8px",
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          cursor: "text",
        }),
        indicatorsContainer: e => ({
          ...e,
          alignItems: "flex-start",
          paddingTop: 4,
        }),
        option: (e, t) => {
          let { isSelected: l, isFocused: a } = t;
          return {
            ...e,
            ...(l
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : a
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
            "&:hover [data-hover=true]": { opacity: 1 },
          };
        },
      };
      function x(e) {
        let {
            options: t,
            value: l,
            onChange: o,
            canBeNew: x,
            memberCounts: p,
          } = e,
          C = e => {
            e.preventDefault(), e.stopPropagation();
          },
          N = n.useCallback(
            e => {
              var n, r, i, d;
              return (0, a.jsxs)("div", {
                className: h.selectValuePill,
                onMouseDown: C,
                children: [
                  v(e.emoji) &&
                    (0, a.jsx)(u.default, {
                      emojiId:
                        null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
                      emojiName:
                        null === (r = e.emoji) || void 0 === r
                          ? void 0
                          : r.name,
                      animated:
                        null !==
                          (d =
                            null === (i = e.emoji) || void 0 === i
                              ? void 0
                              : i.animated) &&
                        void 0 !== d &&
                        d,
                    }),
                  (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: e.title,
                  }),
                  (0, a.jsx)(s.Clickable, {
                    className: h.selectValuePillClose,
                    onClick: () => {
                      o(t.filter(t => l.includes(t.id) && t.id !== e.id));
                    },
                    children: (0, a.jsx)(c.default, {
                      className: h.selectValuePillCloseIcon,
                    }),
                  }),
                ],
              });
            },
            [o, t, l]
          ),
          j = n.useCallback(
            e => {
              var t, l, n, o;
              let r =
                  null == p || null == e.roleIds
                    ? 0
                    : Math.max(...e.roleIds.map(e => p[e])),
                d = null != p && r > 0;
              return (0, a.jsxs)("div", {
                className: h.selectOption,
                children: [
                  (0, a.jsxs)("div", {
                    className: h.selectOptionTitle,
                    children: [
                      v(e.emoji) &&
                        (0, a.jsx)(u.default, {
                          emojiId:
                            null === (t = e.emoji) || void 0 === t
                              ? void 0
                              : t.id,
                          emojiName:
                            null === (l = e.emoji) || void 0 === l
                              ? void 0
                              : l.name,
                          animated:
                            null !==
                              (o =
                                null === (n = e.emoji) || void 0 === n
                                  ? void 0
                                  : n.animated) &&
                            void 0 !== o &&
                            o,
                        }),
                      (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: e.title,
                      }),
                    ],
                  }),
                  x &&
                    e.isUnseen &&
                    (0, a.jsx)(m.TextBadge, {
                      color: i.default.unsafe_rawColors.BRAND_260.css,
                      text: f.default.Messages.NEW,
                      className: h.optionNewBadge,
                    }),
                  d &&
                    (0, a.jsx)("div", {
                      className: h.selectOptionMemberCount,
                      "data-hover": !0,
                      children: (0, a.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children:
                          f.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format(
                            { memberCount: r }
                          ),
                      }),
                    }),
                ],
              });
            },
            [x, p]
          ),
          _ = n.useCallback((e, t) => {
            let { data: l } = e;
            return 0 === t.length || r(t.toLowerCase(), l.title.toLowerCase());
          }, []);
        return (0, a.jsx)(d.default, {
          styleOverrides: g,
          clearable: !1,
          isMulti: !0,
          options: t,
          onChange: o,
          value: l,
          closeMenuOnSelect: !1,
          multiValueRenderer: N,
          optionRenderer: j,
          filterOption: _,
        });
      }
    },
    695284: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("469563"),
        o = l("269096"),
        r = l("75196"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: o,
              ...i
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 11 10",
              children: (0, a.jsx)("path", {
                className: o,
                fill: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.20096 9.92805L0.157959 5.88505L1.92496 4.11705L3.88196 6.07305L8.02396 0.274048L10.059 1.72705L4.20096 9.92805Z",
              }),
            });
          },
          o.CheckmarkLargeIcon,
          void 0,
          { size: 24 }
        );
    },
  },
]);
//# sourceMappingURL=f688a04d2571acae578b.js.map
