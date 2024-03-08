(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69050"],
  {
    357763: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("77078"),
        a = n("272030"),
        i = n("380710"),
        r = n("592407"),
        s = n("724026"),
        d = n("49111"),
        o = n("782340");
      function f(e) {
        let { guild: t, onSelect: n } = e,
          f = (0, s.default)(t.id),
          c = (0, i.isGuildOnboardingSettingsAvailable)(t.id);
        return (0, l.jsx)(u.Menu, {
          onSelect: n,
          navId: "guild-browse-channels-context-menu",
          "aria-label": o.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose: a.closeContextMenu,
          children: (0, l.jsxs)(u.MenuGroup, {
            children: [
              c &&
                (0, l.jsx)(u.MenuItem, {
                  id: "go-to-settings",
                  label: o.default.Messages.EDIT_ONBOARDING,
                  action: () => {
                    r.default.open(t.id, d.GuildSettingsSections.ONBOARDING);
                  },
                }),
              f,
            ],
          }),
        });
      }
    },
    986003: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          hasNotSetUpChannelOptIn: function () {
            return f;
          },
          toggleShowAllChannels: function () {
            return c;
          },
          optIntoAllChannelsForExistingMember: function () {
            return h;
          },
        }),
        n("702976"),
        n("222007"),
        n("424973"),
        n("151426");
      var l = n("921031");
      n("374363");
      var u = n("923959"),
        a = n("26989"),
        i = n("282109"),
        r = n("568734"),
        s = n("629220"),
        d = n("512395"),
        o = n("657944");
      function f(e) {
        var t, n;
        let l = (0, d.isOptInEnabledForGuild)(e),
          u =
            null !==
              (n =
                null === (t = a.default.getSelfMember(e)) || void 0 === t
                  ? void 0
                  : t.flags) && void 0 !== n
              ? n
              : 0,
          s = (0, r.hasFlag)(u, o.GuildMemberFlags.COMPLETED_ONBOARDING),
          f = i.default.getOptedInChannels(e).size > 0;
        return !l && !s && !f;
      }
      function c(e) {
        if (f(e)) {
          h(e);
          return;
        }
        {
          let t = (0, d.isOptInEnabledForGuild)(e);
          (0, s.setGuildOptIn)(e, !t);
        }
      }
      function h(e) {
        let { include: t = new Set(), exclude: n = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = u.default.getChannels(e),
          i = [
            ...a[(0, u.GUILD_SELECTABLE_CHANNELS_KEY)],
            ...a[(0, u.GUILD_VOCAL_CHANNELS_KEY)],
          ]
            .filter(e => {
              let { channel: t } = e;
              return !t.isThread() && !n.has(t.id);
            })
            .map(e => {
              let { channel: t } = e;
              return t.id;
            });
        t.forEach(e => i.push(e)),
          l.default.onboardExistingMember(e, new Set(i));
      }
    },
    724026: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        i = n("305961"),
        r = n("697218"),
        s = n("986003"),
        d = n("512395"),
        o = n("49111"),
        f = n("782340");
      function c(e) {
        let t = (0, d.useOptInEnabledForGuild)(e),
          n = (0, u.useStateFromStores)([i.default], () =>
            i.default.getGuild(e)
          ),
          c = (0, u.useStateFromStores)([r.default], () =>
            r.default.getCurrentUser()
          );
        return null != c &&
          null != n &&
          (n.hasFeature(o.GuildFeatures.COMMUNITY) || c.isStaff())
          ? (0, l.jsx)(a.MenuCheckboxItem, {
              id: "opt-in",
              label: f.default.Messages.GUILD_CHANNEL_OPT_IN,
              checked: !t,
              action: () => {
                (0, s.toggleShowAllChannels)(e);
              },
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=406ca3af639f207ee8b7.js.map
