(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7046"],
  {
    93902: function (e, t, l) {
      "use strict";
      e.exports = l.p + "de1981a6479d060d8ebd.png";
    },
    38766: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var r = l("884691"),
        n = l("79112"),
        o = l("685665"),
        u = l("929423");
      l("424562");
      var a = l("49111"),
        i = l("397336");
      function s(e) {
        let {
            guild: t,
            scrollPosition: l,
            analyticsLocation: s,
            analyticsLocations: c,
            openWithoutBackstack: f = !1,
          } = e,
          { analyticsLocations: d } = (0, o.default)(),
          h = (0, r.useCallback)(() => {
            null != t && (0, u.initGuildIdentitySettings)(t, null != c ? c : d),
              n.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? i.ProfileCustomizationSubsection.GUILD
                  : i.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: l,
                  analyticsLocation: s,
                  analyticsLocations: c,
                  openWithoutBackstack: f,
                }
              );
          }, [t, l, s, c, f, d]);
        return h;
      }
    },
    493390: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          openProfileEffectModal: function () {
            return o;
          },
        });
      var r = l("37983");
      l("884691");
      var n = l("77078");
      let o = e => {
        let { analyticsLocations: t, initialSelectedEffectId: o, guild: u } = e;
        (0, n.openModalLazy)(async () => {
          let { default: e } = await l.el("889793").then(l.bind(l, "889793"));
          return l =>
            (0, r.jsx)(e, {
              ...l,
              guild: u,
              initialSelectedEffectId: o,
              analyticsLocations: t,
            });
        }, {});
      };
    },
    388491: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useProfileThemeValues: function () {
            return h;
          },
          getProfileTheme: function () {
            return E;
          },
          getValueInColorGradientByPercentage: function () {
            return R;
          },
          useAvatarBorderColor: function () {
            return _;
          },
          calculateButtonColor: function () {
            return O;
          },
          useMessageInputBorderColor: function () {
            return T;
          },
          useDividerColor: function () {
            return C;
          },
        }),
        l("222007");
      var r = l("884691"),
        n = l("917351"),
        o = l("509043"),
        u = l("65597"),
        a = l("669491"),
        i = l("819855"),
        s = l("206230"),
        c = l("449918"),
        f = l("172182"),
        d = l("49111");
      function h(e) {
        let t = (0, u.default)([s.default], () => s.default.saturation);
        return (0, r.useMemo)(
          () =>
            null == e
              ? null
              : {
                  overlaySyncedWithUserTheme:
                    a.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(
                      { theme: e, saturation: t }
                    ).hsl(),
                  overlay: a.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                    theme: e,
                    saturation: t,
                  }).hsl(),
                  sectionBox:
                    a.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                      theme: e,
                      saturation: t,
                    }).hsl(),
                  messageInputBorder:
                    a.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve(
                      { theme: e, saturation: t }
                    ).hsl(),
                  dividerOpacity: e === a.default.themes.DARK ? 0.24 : 0.12,
                  noteBackgroundColor:
                    a.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                      theme: e,
                      saturation: t,
                    }).hsl(),
                  profileBodyBackgroundHover:
                    a.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve(
                      { theme: e, saturation: t }
                    ).hsl(),
                  rolePillBackgroundColor:
                    a.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(
                      { theme: e, saturation: t }
                    ).hsl(),
                  rolePillBorderColor:
                    a.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                      theme: e,
                      saturation: t,
                    }).hsl(),
                  icon: a.default.colors.INTERACTIVE_NORMAL.resolve({
                    theme: e,
                    saturation: t,
                  }).hsl(),
                },
          [e, t]
        );
      }
      function E(e) {
        if (null == e) return null;
        let t = (0, o.getDarkness)(e);
        return t > 0.5 ? d.ThemeTypes.DARK : d.ThemeTypes.LIGHT;
      }
      function R(e, t, l) {
        let r = l / 100,
          n = 1 - r;
        return [
          Math.round(e[0] * n + t[0] * r),
          Math.round(e[1] * n + t[1] * r),
          Math.round(e[2] * n + t[2] * r),
        ];
      }
      function I(e, t) {
        let l = (0, o.int2rgbArray)(e);
        if (null == t) return 0;
        let r = f.default.parseString(t);
        if (null == r) return 0;
        let n = [r.red, r.green, r.blue],
          u = [l[0], l[1], l[2]],
          a = r.alpha,
          [i, s, c] = n.map((e, t) => Math.floor(a * e + (1 - a) * u[t]));
        return (0, o.rgb2int)(
          "rgba(".concat(i, ", ").concat(s, ", ").concat(c, ")")
        );
      }
      function _(e, t, l) {
        let r = h(e);
        return null == r || null == t
          ? null
          : I(t, l ? r.overlaySyncedWithUserTheme : r.overlay);
      }
      let O = (0, n.memoize)(
        e => {
          let t = (0, i.getContrastingColor)(e, {
            base: "#ffffff",
            contrastRatio: i.WCAGContrastRatios.HighContrastText,
          });
          return (0, o.hex2int)(t);
        },
        e => e
      );
      function T(e, t) {
        let l = h(e);
        return null != l && null != t
          ? I(t, null == l ? void 0 : l.messageInputBorder)
          : null;
      }
      function C(e, t) {
        let l = (0, c.useColorValue)(d.Color.WHITE_500).hex;
        return (0, i.isThemeDark)(e)
          ? (0, o.hex2int)(l)
          : null != t
            ? O(t)
            : null;
      }
    },
  },
]);
//# sourceMappingURL=4059bce09ea7f62d9ae0.js.map
