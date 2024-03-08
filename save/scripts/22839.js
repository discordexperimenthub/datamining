(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22839"],
  {
    136137: function (e, u, t) {
      "use strict";
      t.r(u),
        t.d(u, {
          default: function () {
            return d;
          },
        });
      var n = t("37983");
      t("884691");
      var a = t("77078"),
        l = t("272030"),
        s = t("692356"),
        r = t("206059"),
        o = t("782340");
      function d(e) {
        let { guildId: u, onSelect: t, onPickerClose: d } = e,
          i = (0, r.default)(u, d),
          c = (0, s.default)();
        return (0, n.jsx)(a.Menu, {
          navId: "user-context",
          onClose: l.closeContextMenu,
          "aria-label": o.default.Messages.USER_ACTIONS_MENU_LABEL,
          className: "context-menu",
          onSelect: t,
          children: (0, n.jsxs)(a.MenuGroup, { children: [c, i] }),
        });
      }
    },
    692356: function (e, u, t) {
      "use strict";
      t.r(u),
        t.d(u, {
          default: function () {
            return d;
          },
        });
      var n = t("37983");
      t("884691");
      var a = t("77078"),
        l = t("829536"),
        s = t("305122"),
        r = t("78581"),
        o = t("782340");
      function d() {
        let e = (0, r.getAmplitudinalSoundboardVolume)();
        return (0, n.jsx)(a.MenuControlItem, {
          id: "user-volume",
          "aria-haspopup": !0,
          label: o.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
          control: (u, t) =>
            (0, n.jsx)(a.MenuSliderControl, {
              ...u,
              ref: t,
              value: (0, l.amplitudeToPerceptual)(e),
              maxValue: 100,
              onChange: e =>
                (0, s.updateUserSoundboardVolume)(
                  (0, l.perceptualToAmplitude)(e)
                ),
              "aria-label": o.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
            }),
        });
      }
    },
    206059: function (e, u, t) {
      "use strict";
      t.r(u),
        t.d(u, {
          default: function () {
            return c;
          },
        });
      var n = t("37983");
      t("884691");
      var a = t("446674"),
        l = t("77078"),
        s = t("592407"),
        r = t("817963"),
        o = t("305961"),
        d = t("49111"),
        i = t("782340");
      function c(e, u) {
        let t = (0, a.useStateFromStores)([o.default], () =>
            null != e ? o.default.getGuild(e) : null
          ),
          { canCreateExpressions: c, canManageAllExpressions: S } = (0,
          r.useManageResourcePermissions)(t);
        return null != e && c && S
          ? (0, n.jsx)(l.MenuItem, {
              id: i.default.Messages.SERVER_SETTINGS,
              label: i.default.Messages.SERVER_SETTINGS,
              action: () => {
                s.default.open(e, d.GuildSettingsSections.SOUNDBOARD),
                  null == u || u();
              },
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=8f720fb686ab8f7bd839.js.map
