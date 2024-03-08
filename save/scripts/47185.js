(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47185"],
  {
    126623: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
          useCustomizeCommunityPromptHelpText: function () {
            return f;
          },
        });
      var a = l("446674"),
        n = l("679653"),
        o = l("42203"),
        r = l("305961"),
        i = l("27618"),
        s = l("697218"),
        u = l("449008"),
        d = l("782340");
      function c(e, t, l) {
        return 0 === e.length
          ? ""
          : (l
              ? d.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES_ALSO
              : d.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES
            ).format({
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: t,
            });
      }
      function m(e) {
        let {
            guild: t,
            prompt: l,
            selectedRoleIds: m,
            selectedChannelIds: f,
            itemHook: h,
          } = e,
          v = (0, a.useStateFromStores)([r.default], () =>
            null != t ? r.default.getRoles(t.id) : void 0
          ),
          g = (0, a.useStateFromStoresArray)(
            [o.default, s.default, i.default],
            () =>
              Array.from(f)
                .map(e => o.default.getChannel(e))
                .filter(u.isNotNullish)
                .map(e =>
                  (0, n.computeChannelName)(e, s.default, i.default, !0)
                )
          ),
          x = Array.from(m)
            .map(e => {
              var t;
              return null === (t = (null != v ? v : {})[e]) || void 0 === t
                ? void 0
                : t.name;
            })
            .filter(u.isNotNullish)
            .map(e => "@".concat(e)),
          p = (null == l ? void 0 : l.singleSelect)
            ? ""
            : d.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS,
          C = "";
        if (0 === g.length && x.length > 0) p = c(x, h);
        else if (g.length > 0) {
          var N, j;
          (N = g),
            (j = h),
            (p =
              0 === N.length
                ? ""
                : d.default.Messages.ONBOARDING_HELP_TEXT_ADD_CHANNELS.format({
                    count: N.length,
                    extraCount: Math.max(N.length - 2, 0),
                    channel1: N[0],
                    channel2: N[1],
                    itemHook: j,
                  })),
            x.length > 0 && (C = c(x, h, !0));
        }
        return { helpText: p, helpTextAdditional: C };
      }
      function f(e) {
        let {
            guild: t,
            prompt: l,
            selectedRoleIds: c,
            selectedChannelIds: m,
            itemHook: f,
          } = e,
          h = (0, a.useStateFromStores)([r.default], () =>
            null != t ? r.default.getRoles(t.id) : void 0
          ),
          v = (0, a.useStateFromStoresArray)(
            [o.default, s.default, i.default],
            () =>
              Array.from(m)
                .map(e => o.default.getChannel(e))
                .filter(u.isNotNullish)
                .map(e =>
                  (0, n.computeChannelName)(e, s.default, i.default, !0)
                )
          ),
          g = Array.from(c)
            .map(e => {
              var t;
              return null === (t = (null != h ? h : {})[e]) || void 0 === t
                ? void 0
                : t.name;
            })
            .filter(u.isNotNullish)
            .map(e => "@".concat(e)),
          x = (null == l ? void 0 : l.singleSelect)
            ? ""
            : d.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS;
        return (
          0 === v.length && g.length > 0
            ? (x = d.default.Messages.CUSTOMIZE_COMMUNITY_ADD_ROLES.format({
                count: g.length,
                extraCount: Math.max(g.length - 2, 0),
                role1: g[0],
                role2: g[1],
                itemHook: f,
              }))
            : v.length > 0 && 0 === g.length
              ? (x = d.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS.format(
                  {
                    count: v.length,
                    extraCount: Math.max(v.length - 2, 0),
                    channel1: v[0],
                    channel2: v[1],
                    itemHook: f,
                  }
                ))
              : v.length > 0 &&
                g.length > 0 &&
                (x =
                  d.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS_AND_ROLES.format(
                    {
                      channelCount: v.length,
                      extraChannelCount: Math.max(v.length - 2, 0),
                      channel1: v[0],
                      channel2: v[1],
                      itemHook: f,
                      roleCount: g.length,
                      extraRoleCount: Math.max(g.length - 2, 0),
                      role1: g[0],
                      role2: g[1],
                    }
                  )),
          { helpText: x, helpTextAdditional: "" }
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
          S = T && !j,
          A = n.useRef(null),
          { reducedMotion: I } = n.useContext(
            c.AccessibilityPreferencesContext
          ),
          E = (0, s.default)([h.default], () => {
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
          b = (0, v.default)(t, 1e3),
          D =
            null == b || null == l.roleIds
              ? 0
              : Math.max(...l.roleIds.map(e => b[e])),
          L = _ && !o && l.isUnseen,
          k = (0, i.useSpring)({
            transform: o || I.enabled ? "scale(1)" : "scale(0.7)",
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
          B = (0, i.useTransition)(S, {
            from: {
              transform: I.enabled ? "translateX(0)" : "translateX(8px)",
              opacity: 0,
            },
            enter: { transform: "translateX(0)", opacity: 1 },
            leave: { opacity: 0 },
            trail: 400,
            config: { duration: 150 },
          }),
          [P, U] = n.useState(!1);
        n.useEffect(() => {
          if (S)
            return (
              (A.current = setTimeout(() => {
                M(!1), (A.current = null);
              }, 3e3)),
              () => {
                null != A.current && clearTimeout(A.current);
              }
            );
        }, [S]);
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
                      animated: l.emoji.animated || E,
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
//# sourceMappingURL=a8fb856e9372e953002e.js.map
