(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90416"],
  {
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var u = n("37983");
      n("884691");
      var r = n("685665");
      function a(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: a } = (0, r.default)(t);
          return (0, u.jsx)(a, { children: (0, u.jsx)(e, { ...n }) });
        };
      }
    },
    727212: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007"),
        n("781738");
      var u = n("37983"),
        r = n("884691"),
        a = n("77078"),
        s = n("272030"),
        l = n("79112"),
        i = n("534291"),
        o = n("158534"),
        d = n("812204"),
        c = n("685665"),
        f = n("960460"),
        S = n("425916"),
        E = n("373798"),
        M = n("23778"),
        m = n("872137"),
        p = n("846759"),
        T = n("887060"),
        I = n("22561"),
        h = n("856133"),
        _ = n("49111"),
        g = n("782340"),
        C = (0, o.default)(
          function (e) {
            let { webBuildOverride: t, onSelect: n } = e,
              [o, d] = r.useState(!1),
              C = (0, T.default)(),
              x = (0, m.default)(),
              R = (0, M.default)(),
              v = (0, h.default)(),
              j = (0, I.default)(),
              L = (0, p.default)(),
              { AnalyticsLocationProvider: b, analyticsLocations: A } = (0,
              c.default)(),
              O = r.useMemo(() => (0, S.getRecentBuildOverrides)(), []);
            async function N() {
              try {
                d(!0),
                  await (0, f.clearBuildOverride)(),
                  window.location.reload(!0);
              } catch (e) {
                d(!1);
              }
            }
            let y = e => {
                switch (e) {
                  case _.UserSettingsSections.STREAMER_MODE:
                    return C;
                  case _.UserSettingsSections.APPEARANCE:
                    return x;
                  case _.UserSettingsSections.ACCESSIBILITY:
                    return R;
                  case _.UserSettingsSections.VOICE:
                    return v;
                  case _.UserSettingsSections.TEXT:
                    return j;
                  case _.UserSettingsSections.EXPERIMENTS:
                    return L;
                  default:
                    return null;
                }
              },
              k = (0, E.default)()
                .filter(e => {
                  let { section: t } = e;
                  return (
                    t !== i.SectionTypes.HEADER &&
                    t !== i.SectionTypes.CUSTOM &&
                    t !== i.SectionTypes.DIVIDER &&
                    "logout" !== t
                  );
                })
                .filter(e => null == e.predicate || e.predicate());
            return (0, u.jsx)(b, {
              children: (0, u.jsxs)(a.Menu, {
                navId: "user-settings-cog",
                onClose: s.closeContextMenu,
                "aria-label":
                  g.default.Messages.USER_SETTINGS_ACTIONS_MENU_LABEL,
                onSelect: n,
                children: [
                  k.map(e => {
                    let { section: t, label: n, onClick: r } = e,
                      s = t.replace(/\W/gi, "_");
                    return (0, u.jsx)(
                      a.MenuItem,
                      {
                        id: s,
                        label: n,
                        action: () =>
                          null != r
                            ? r()
                            : (function (e, t) {
                                let n = Object.values(_.UserSettingsSections),
                                  u = n.filter(t => t === e)[0];
                                null != u &&
                                  l.default.open(u, void 0, {
                                    analyticsLocations: t,
                                  });
                              })(t, A),
                        children: y(t),
                      },
                      s
                    );
                  }),
                  e.user.isStaff() && O.length > 0
                    ? (0, u.jsx)(a.MenuItem, {
                        label: "Build overrides",
                        id: "build_overrides",
                        children: (0, u.jsx)(a.MenuGroup, {
                          children: O.map(e =>
                            (0, u.jsx)(
                              a.MenuRadioItem,
                              {
                                id: "input-".concat(e.payload),
                                group: "build_overrides",
                                label: e.id,
                                checked: (null == t ? void 0 : t.id) === e.id,
                                action: async () => {
                                  if ((null == t ? void 0 : t.id) === e.id)
                                    return;
                                  let n = await (0, f.applyPublicBuildOverride)(
                                    e.payload
                                  );
                                  200 === n.status &&
                                    window.location.reload(!0);
                                },
                              },
                              "input-".concat(e.payload)
                            )
                          ),
                        }),
                      })
                    : null,
                  null != t
                    ? (0, u.jsx)(a.MenuGroup, {
                        children: (0, u.jsx)(a.MenuItem, {
                          id: "clear-build-override",
                          disabled: o,
                          label: g.default.Messages.CLEAR_BUILD_OVERRIDE,
                          action: N,
                          color: "danger",
                        }),
                      })
                    : null,
                ],
              }),
            });
          },
          [d.default.CONTEXT_MENU, d.default.USER_SETTINGS_MENU]
        );
    },
    23778: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var u = n("37983");
      n("884691");
      var r = n("446674"),
        a = n("77078"),
        s = n("180748"),
        l = n("206230"),
        i = n("782340");
      function o() {
        let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n,
          } = (0, r.useStateFromStoresObject)([l.default], () => ({
            saturation: l.default.saturation,
            useReducedMotion: l.default.useReducedMotion,
            roleStyle: l.default.roleStyle,
          })),
          o = [
            {
              name: i.default.Messages
                .ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
              value: "username",
            },
            {
              name: i.default.Messages
                .ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
              value: "dot",
            },
            {
              name: i.default.Messages
                .ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
              value: "hidden",
            },
          ];
        return [
          (0, u.jsx)(
            a.MenuGroup,
            {
              children: (0, u.jsx)(a.MenuCheckboxItem, {
                id: "reduced-motion",
                label:
                  i.default.Messages
                    .ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE,
                checked: t,
                action: () =>
                  (0, s.setPrefersReducedMotion)(
                    t ? "no-preference" : "reduce"
                  ),
              }),
            },
            "reduced-motion"
          ),
          (0, u.jsx)(
            a.MenuGroup,
            {
              children: (0, u.jsx)(a.MenuControlItem, {
                id: "input",
                label:
                  i.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
                control: (t, n) =>
                  (0, u.jsx)(a.MenuSliderControl, {
                    ...t,
                    ref: n,
                    value: 100 * e,
                    onChange: e => (0, s.setSaturation)(e / 100),
                    "aria-label":
                      i.default.Messages
                        .ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
                  }),
              }),
            },
            "input"
          ),
          (0, u.jsx)(
            a.MenuGroup,
            {
              children: (0, u.jsx)(a.MenuItem, {
                id: "role-colors",
                label:
                  i.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
                children: o.map(e => {
                  let { name: t, value: r } = e;
                  return (0, u.jsx)(
                    a.MenuRadioItem,
                    {
                      id: r,
                      group: "role-colors",
                      checked: r === n,
                      label: t,
                      action: () => (0, s.setRoleStyle)(r),
                    },
                    r
                  );
                }),
              }),
            },
            "role-colors"
          ),
        ];
      }
    },
    872137: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var u = n("37983");
      n("884691");
      var r = n("446674"),
        a = n("77078"),
        s = n("452804"),
        l = n("180748"),
        i = n("206230"),
        o = n("685665"),
        d = n("648114"),
        c = n("161778"),
        f = n("168973"),
        S = n("845579"),
        E = n("116319"),
        M = n("49111"),
        m = n("782340");
      function p() {
        let e = S.MessageDisplayCompact.useSetting(),
          { analyticsLocations: t } = (0, o.default)(),
          {
            theme: n,
            useSystemTheme: p,
            useForcedColors: T,
          } = (0, r.useStateFromStoresObject)(
            [c.default, f.default, i.default],
            () => ({
              theme: c.default.theme,
              useSystemTheme: f.default.useSystemTheme,
              useForcedColors: i.default.useForcedColors,
            })
          ),
          I = (e, r) =>
            (0, u.jsx)(a.MenuRadioItem, {
              id: e,
              group: "input-modes",
              label: r,
              disabled: T,
              checked: p === E.SystemThemeState.ON ? "system" === e : e === n,
              action: () => {
                (0, d.trackClientThemeUpdated)({
                  isPersisted: !0,
                  analyticsLocations: t,
                  themeName: "default ".concat(e),
                }),
                  (0, s.saveClientTheme)({ theme: e });
              },
            });
        return [
          (0, u.jsxs)(
            a.MenuGroup,
            {
              children: [
                I(M.ThemeTypes.DARK, m.default.Messages.THEME_DARK),
                I(M.ThemeTypes.LIGHT, m.default.Messages.THEME_LIGHT),
                I("system", m.default.Messages.THEME_SYSTEM),
              ],
            },
            "theme-items"
          ),
          (0, u.jsx)(
            a.MenuGroup,
            {
              children: (0, u.jsx)(a.MenuItem, {
                id: "compact-mode",
                label: e
                  ? m.default.Messages.SWITCH_TO_COZY_MODE
                  : m.default.Messages.SWITCH_TO_COMPACT_MODE,
                action: () => {
                  S.MessageDisplayCompact.updateSetting(!e),
                    (0, l.setMessageGroupSpacing)();
                },
              }),
            },
            "compact-mode"
          ),
        ];
      }
    },
    846759: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var u = n("37983"),
        r = n("884691"),
        a = n("714617"),
        s = n.n(a),
        l = n("448105"),
        i = n.n(l),
        o = n("446674"),
        d = n("77078"),
        c = n("211470"),
        f = n("789563"),
        S = n("760190"),
        E = n("228220"),
        M = n("843039"),
        m = n("782340");
      function p(e) {
        let { id: t, experiment: n, currentBucket: r } = e;
        return (0, u.jsxs)(
          d.MenuItem,
          {
            id: t,
            label: n.title,
            action: () => (0, c.overrideBucket)(t, null),
            children: [
              n.buckets.map(e =>
                (0, u.jsx)(
                  d.MenuCheckboxItem,
                  {
                    id: "".concat(e),
                    label: M.default.getExperimentBucketName(e),
                    checked: e === r,
                    action: () => (0, c.overrideBucket)(t, e),
                  },
                  "".concat(e)
                )
              ),
              (0, u.jsx)(d.MenuGroup, {
                children:
                  -1 !== r &&
                  (0, u.jsx)(d.MenuItem, {
                    id: "clear-override",
                    label: "Clear Override",
                    color: "danger",
                    icon: E.default,
                    action: () => (0, c.overrideBucket)(t, null),
                  }),
              }),
            ],
          },
          t
        );
      }
      function T() {
        let e = (0, o.useStateFromStores)(
            [f.default, S.default],
            () => {
              let e = S.default.getRegisteredExperiments();
              return Object.keys(e).map(t => {
                let n = e[t],
                  u = f.default.getExperimentOverrideDescriptor(t);
                return {
                  id: t,
                  experiment: n,
                  currentBucket: null != u ? u.bucket : -1,
                };
              });
            },
            [],
            s
          ),
          [t, n] = r.useState(""),
          [a, l] = r.useState([]);
        r.useEffect(() => {
          if (0 === t.trim().length) {
            l(e);
            return;
          }
          l(e.filter(e => i(t, e.experiment.title.toLowerCase())));
        }, [e, t]);
        let c = r.useMemo(
            () =>
              a.filter(e => {
                let { currentBucket: t } = e;
                return -1 !== t;
              }),
            [a]
          ),
          E = r.useMemo(
            () =>
              a.filter(e => {
                let { currentBucket: t } = e;
                return -1 === t;
              }),
            [a]
          ),
          M = r.useMemo(() => c.map(p), [c]),
          T = r.useMemo(() => E.map(p), [E]),
          I = (0, u.jsx)(
            d.MenuControlItem,
            {
              id: "experiments-search",
              control: (e, r) =>
                (0, u.jsx)(d.MenuSearchControl, {
                  ...e,
                  query: t,
                  onChange: n,
                  ref: r,
                  placeholder: m.default.Messages.SEARCH,
                }),
            },
            "experiments-search"
          );
        return [
          I,
          (0, u.jsx)(d.MenuSeparator, {}, "separator"),
          ...M,
          M.length > 0 ? (0, u.jsx)(d.MenuSeparator, {}, "separator-2") : null,
          ...T,
        ];
      }
    },
    887060: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var u = n("37983");
      n("884691");
      var r = n("446674"),
        a = n("77078"),
        s = n("52289"),
        l = n("102985"),
        i = n("782340");
      function o() {
        let e = (0, r.useStateFromStores)(
          [l.default],
          () => l.default.enabled,
          []
        );
        return (0, u.jsx)(a.MenuCheckboxItem, {
          id: "streamer-mode-toggle",
          label: i.default.Messages.ENABLE_STREAMER_MODE_LABEL,
          action: () => {
            s.default.setEnabled(!e);
          },
          checked: e,
        });
      }
    },
    22561: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var u = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("599110"),
        s = n("845579"),
        l = n("49111"),
        i = n("782340");
      function o() {
        let e = s.UseLegacyChatInput.useSetting(),
          t = s.UseRichChatInput.useSetting();
        return e
          ? null
          : (0, u.jsx)(r.MenuCheckboxItem, {
              id: "preview-markdown-toggle",
              label: i.default.Messages.PREVIEW_MARKDOWN,
              action: () => {
                let e = !t;
                a.default.track(l.AnalyticEvents.PREVIEW_MARKDOWN_TOGGLED, {
                  enabled: e,
                  location: {
                    section: l.AnalyticsSections.SETTINGS_CONTEXT_MENU,
                  },
                }),
                  s.UseRichChatInput.updateSetting(e);
              },
              checked: t,
            });
      }
    },
    856133: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var u = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("143082"),
        s = n("252227"),
        l = n("832759");
      function i() {
        return [
          (0, u.jsx)(
            r.MenuGroup,
            { children: (0, s.default)() },
            "input-mode-items"
          ),
          (0, u.jsxs)(
            r.MenuGroup,
            { children: [(0, a.default)(), (0, l.default)()] },
            "input-output"
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=718e21e39a4562423315.js.map
