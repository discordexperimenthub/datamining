(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7046"],
  {
    93902: function (e, t, r) {
      "use strict";
      e.exports = r.p + "de1981a6479d060d8ebd.png";
    },
    38766: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        });
      var l = r("884691"),
        n = r("79112"),
        o = r("685665"),
        u = r("929423");
      r("424562");
      var a = r("49111"),
        s = r("397336");
      function i(e) {
        let {
            guild: t,
            scrollPosition: r,
            analyticsLocation: i,
            analyticsLocations: c,
            openWithoutBackstack: f = !1,
          } = e,
          { analyticsLocations: d } = (0, o.default)(),
          h = (0, l.useCallback)(() => {
            null != t && (0, u.initGuildIdentitySettings)(t, null != c ? c : d),
              n.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? s.ProfileCustomizationSubsection.GUILD
                  : s.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: r,
                  analyticsLocation: i,
                  analyticsLocations: c,
                  openWithoutBackstack: f,
                }
              );
          }, [t, r, i, c, f, d]);
        return h;
      }
    },
    493390: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          openProfileEffectModal: function () {
            return o;
          },
        });
      var l = r("37983");
      r("884691");
      var n = r("77078");
      let o = e => {
        let { analyticsLocations: t, initialSelectedEffectId: o, guild: u } = e;
        (0, n.openModalLazy)(async () => {
          let { default: e } = await r.el("889793").then(r.bind(r, "889793"));
          return r =>
            (0, l.jsx)(e, {
              ...r,
              guild: u,
              initialSelectedEffectId: o,
              analyticsLocations: t,
            });
        }, {});
      };
    },
    388491: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
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
        r("222007");
      var l = r("884691"),
        n = r("917351"),
        o = r("509043"),
        u = r("65597"),
        a = r("669491"),
        s = r("819855"),
        i = r("206230"),
        c = r("449918"),
        f = r("172182"),
        d = r("49111");
      function h(e) {
        let t = (0, u.useStateFromStores)(
          [i.default],
          () => i.default.saturation
        );
        return (0, l.useMemo)(
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
      function R(e, t, r) {
        let l = r / 100,
          n = 1 - l;
        return [
          Math.round(e[0] * n + t[0] * l),
          Math.round(e[1] * n + t[1] * l),
          Math.round(e[2] * n + t[2] * l),
        ];
      }
      function I(e, t) {
        let r = (0, o.int2rgbArray)(e);
        if (null == t) return 0;
        let l = f.default.parseString(t);
        if (null == l) return 0;
        let n = [l.red, l.green, l.blue],
          u = [r[0], r[1], r[2]],
          a = l.alpha,
          [s, i, c] = n.map((e, t) => Math.floor(a * e + (1 - a) * u[t]));
        return (0, o.rgb2int)(
          "rgba(".concat(s, ", ").concat(i, ", ").concat(c, ")")
        );
      }
      function _(e, t, r) {
        let l = h(e);
        return null == l || null == t
          ? null
          : I(t, r ? l.overlaySyncedWithUserTheme : l.overlay);
      }
      let O = (0, n.memoize)(
        e => {
          let t = (0, s.getContrastingColor)(e, {
            base: "#ffffff",
            contrastRatio: s.WCAGContrastRatios.HighContrastText,
          });
          return (0, o.hex2int)(t);
        },
        e => e
      );
      function T(e, t) {
        let r = h(e);
        return null != r && null != t
          ? I(t, null == r ? void 0 : r.messageInputBorder)
          : null;
      }
      function C(e, t) {
        let r = (0, c.useColorValue)(d.Color.WHITE_500).hex;
        return (0, s.isThemeDark)(e)
          ? (0, o.hex2int)(r)
          : null != t
            ? O(t)
            : null;
      }
    },
  },
]);
//# sourceMappingURL=98e9eb9a90ff639dbe45.js.map
