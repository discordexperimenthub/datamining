(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67714"],
  {
    625399: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
          useChannelNotificationSettingsItemInner: function () {
            return h;
          },
          useChannelNotificationCustomSettingsItem: function () {
            return M;
          },
        }),
        n("222007"),
        n("702976");
      var i = n("37983"),
        a = n("884691"),
        s = n("446674"),
        l = n("77078"),
        o = n("519705"),
        r = n("437756"),
        d = n("277796"),
        u = n("507313"),
        S = n("282109"),
        g = n("34676"),
        _ = n("49111"),
        c = n("133335"),
        N = n("397336"),
        f = n("782340");
      function E(e) {
        let t = h(e);
        return e.type === _.ChannelTypes.GUILD_VOICE
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "channel_notification_settings",
              label: f.default.Messages.NOTIFICATIONS,
              children: t,
            });
      }
      function h(e) {
        let t = (0, r.useChannelPresetSettings)(e),
          n = (0, r.useChannelPresetInheritance)(e),
          d = t.preset === u.Presets.CUSTOM && !n.inherited,
          [g, c] = a.useState(d),
          [N, E] = a.useState(!1),
          h = N ? u.Presets.CUSTOM : t.preset,
          O = M(e, () => E(!1)),
          I = (0, s.useStateFromStores)([S.default], () =>
            S.default.getNewForumThreadsCreated(e)
          ),
          T =
            "parent" === n.inheritedFrom
              ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
              : f.default.Messages.FORM_LABEL_DEFAULT;
        return e.type === _.ChannelTypes.GUILD_STAGE_VOICE
          ? (0, i.jsxs)(l.MenuGroup, {
              children: [
                (0, i.jsx)(l.MenuRadioItem, {
                  id: "cns_default",
                  label: T,
                  checked: n.inherited,
                  group: "channel_notification_settings",
                  subtext:
                    t.notification === _.UserNotificationSettings.NO_MESSAGES
                      ? f.default.Messages.FORM_LABEL_NOTHING
                      : f.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                  action: () =>
                    (0, r.updateChannelToGuildDefault)(e.guild_id, e.id),
                }),
                (0, i.jsx)(l.MenuRadioItem, {
                  id: "cns_only_mention",
                  group: "channel_notification_settings",
                  checked:
                    !n.inherited &&
                    t.notification !== _.UserNotificationSettings.NO_MESSAGES,
                  label: f.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                  action: () =>
                    (0, r.updateChannelNotificationSetting)(
                      e.guild_id,
                      e.id,
                      _.UserNotificationSettings.ONLY_MENTIONS
                    ),
                }),
                (0, i.jsx)(l.MenuRadioItem, {
                  id: "cns_no_message",
                  group: "channel_notification_settings",
                  label: f.default.Messages.FORM_LABEL_NOTHING,
                  checked:
                    !n.inherited &&
                    t.notification === _.UserNotificationSettings.NO_MESSAGES,
                  action: () =>
                    (0, r.updateChannelNotificationSetting)(
                      e.guild_id,
                      e.id,
                      _.UserNotificationSettings.NO_MESSAGES
                    ),
                }),
              ],
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                e.isForumLikeChannel()
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(l.MenuCheckboxItem, {
                          id: "new-forum-threads-created",
                          label: f.default.Messages.FORUM_NEW_POSTS_CREATED,
                          checked: I,
                          action: () => o.default.setForumThreadsCreated(e, !I),
                        }),
                        (0, i.jsx)(l.MenuSeparator, {}),
                      ],
                    })
                  : null,
                (0, i.jsxs)(l.MenuGroup, {
                  children: [
                    (0, i.jsx)(l.MenuRadioItem, {
                      id: "cns_default",
                      label: T,
                      group: "channel_notification_settings",
                      checked: n.inherited && !N,
                      subtext: n.inheritedPreset,
                      action: () => (
                        (0, r.updateChannelToGuildDefault)(e.guild_id, e.id),
                        E(!1)
                      ),
                    }),
                    (0, i.jsx)(l.MenuRadioItem, {
                      id: "cns_everything",
                      group: "channel_notification_settings",
                      label: f.default.Messages.NOTIFICATION_PRESET_1,
                      checked: !n.inherited && h === u.Presets.ALL_MESSAGES,
                      action: () => (
                        (0, r.updateChannelPreset)(
                          e.guild_id,
                          e.id,
                          u.Presets.ALL_MESSAGES
                        ),
                        E(!1)
                      ),
                    }),
                    (0, i.jsx)(l.MenuRadioItem, {
                      id: "cns_essentials",
                      group: "channel_notification_settings",
                      label: f.default.Messages.NOTIFICATION_PRESET_2,
                      checked: !n.inherited && h === u.Presets.MENTIONS,
                      action: () => (
                        (0, r.updateChannelPreset)(
                          e.guild_id,
                          e.id,
                          u.Presets.MENTIONS
                        ),
                        E(!1)
                      ),
                    }),
                    (0, i.jsx)(l.MenuRadioItem, {
                      id: "cns_nothing",
                      group: "channel_notification_settings",
                      label: f.default.Messages.NOTIFICATION_PRESET_3,
                      checked: !n.inherited && h === u.Presets.NOTHING,
                      action: () => (
                        (0, r.updateChannelPreset)(
                          e.guild_id,
                          e.id,
                          u.Presets.NOTHING
                        ),
                        E(!1)
                      ),
                    }),
                    (0, i.jsx)(l.MenuRadioItem, {
                      id: "cns_custom",
                      group: "channel_notification_settings",
                      label: f.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                      checked: N || (!n.inherited && h === u.Presets.CUSTOM),
                      action: () => (c(!0), E(!0)),
                    }),
                  ],
                }),
                (g || d) && O,
              ],
            });
      }
      function M(e, t) {
        let { notification: n, unread: a } = (0, r.useChannelPresetSettings)(e),
          s = e => {
            e(), t();
          },
          u = t => {
            let n = { message_notifications: t };
            t === _.UserNotificationSettings.ALL_MESSAGES &&
              a !== c.UnreadSetting.ALL_MESSAGES &&
              (n.flags = (0, d.withChannelUnreadFlags)(
                S.default.getChannelIdFlags(e.guild_id, e.id),
                N.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES
              )),
              o.default.updateChannelOverrideSettings(
                e.guild_id,
                e.id,
                n,
                g.NotificationLabel.notifications(t)
              );
          };
        return (0, i.jsxs)(l.MenuGroup, {
          children: [
            (0, i.jsxs)(
              l.MenuItem,
              {
                id: "unread_setting",
                label: "Unread Badges",
                children: [
                  (0, i.jsx)(l.MenuRadioItem, {
                    id: "unread_setting_all_messages",
                    group: "unread_setting",
                    checked: a === c.UnreadSetting.ALL_MESSAGES,
                    label:
                      f.default.Messages
                        .NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    action: () =>
                      s(() =>
                        (0, r.updateChannelUnreadSetting)(
                          e.guild_id,
                          e.id,
                          c.UnreadSetting.ALL_MESSAGES
                        )
                      ),
                  }),
                  (0, i.jsx)(l.MenuRadioItem, {
                    id: "unread_setting_mention_only",
                    group: "unread_setting",
                    checked: a === c.UnreadSetting.ONLY_MENTIONS,
                    label:
                      f.default.Messages
                        .NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    disabled:
                      a !== c.UnreadSetting.ONLY_MENTIONS &&
                      n === _.UserNotificationSettings.ALL_MESSAGES,
                    subtext:
                      a !== c.UnreadSetting.ONLY_MENTIONS &&
                      n === _.UserNotificationSettings.ALL_MESSAGES
                        ? f.default.Messages
                            .NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED
                        : void 0,
                    action: () =>
                      s(() =>
                        (0, r.updateChannelUnreadSetting)(
                          e.guild_id,
                          e.id,
                          c.UnreadSetting.ONLY_MENTIONS
                        )
                      ),
                  }),
                ],
              },
              "unread_setting"
            ),
            (0, i.jsxs)(
              l.MenuItem,
              {
                id: "push_settings",
                label: f.default.Messages.NOTIFICATIONS,
                children: [
                  (0, i.jsx)(l.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything",
                    label:
                      f.default.Messages
                        .NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    checked: n === _.UserNotificationSettings.ALL_MESSAGES,
                    subtext:
                      a !== c.UnreadSetting.ALL_MESSAGES &&
                      n !== _.UserNotificationSettings.ALL_MESSAGES
                        ? f.default.Messages
                            .NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING
                        : void 0,
                    action: () =>
                      s(() => u(_.UserNotificationSettings.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(l.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_mention",
                    checked: n === _.UserNotificationSettings.ONLY_MENTIONS,
                    label:
                      f.default.Messages
                        .NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    action: () =>
                      s(() => u(_.UserNotificationSettings.ONLY_MENTIONS)),
                  }),
                  (0, i.jsx)(l.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_nothing",
                    label:
                      f.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                    checked: n === _.UserNotificationSettings.NO_MESSAGES,
                    action: () =>
                      s(() => u(_.UserNotificationSettings.NO_MESSAGES)),
                  }),
                ],
              },
              "push_settings"
            ),
          ],
        });
      }
    },
    47495: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getMuteTimeOptions: function () {
            return _;
          },
          filterOverrides: function () {
            return N;
          },
          useShouldUseNewNotificationSystem: function () {
            return f;
          },
        }),
        n("222007"),
        n("702976");
      var i = n("446674"),
        a = n("668597"),
        s = n("282109"),
        l = n("568734"),
        o = n("299039"),
        r = n("640497"),
        d = n("49111"),
        u = n("468200"),
        S = n("397336"),
        g = n("782340");
      function _() {
        return [
          {
            label: g.default.Messages.MUTE_DURATION_15_MINUTES,
            value: u.MuteUntilSeconds.MINUTES_15,
          },
          {
            label: g.default.Messages.MUTE_DURATION_1_HOUR,
            value: u.MuteUntilSeconds.HOURS_1,
          },
          {
            label: g.default.Messages.MUTE_DURATION_3_HOURS,
            value: u.MuteUntilSeconds.HOURS_3,
          },
          {
            label: g.default.Messages.MUTE_DURATION_8_HOURS,
            value: u.MuteUntilSeconds.HOURS_8,
          },
          {
            label: g.default.Messages.MUTE_DURATION_24_HOURS,
            value: u.MuteUntilSeconds.HOURS_24,
          },
          {
            label: g.default.Messages.MUTE_DURATION_ALWAYS,
            value: u.MuteUntilSeconds.ALWAYS,
          },
        ];
      }
      let c = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function N(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
        return o.default.keys(e).filter(n => {
          var i, s;
          let o =
              e[n].message_notifications !== d.UserNotificationSettings.NULL,
            r =
              l.hasFlag(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES
              ) ||
              l.hasFlag(
                null !== (s = e[n].flags) && void 0 !== s ? s : 0,
                S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
              );
          return (
            (!t.ignoreUnreadSetting && r) ||
            (!t.ignoreNotificationSetting && o) ||
            (!t.ignoreMute && (0, a.computeIsMuted)(e[n]))
          );
        });
      }
      function f(e) {
        let t = (0, i.useStateFromStores)(
          [s.default],
          () => s.default.useNewNotifications
        );
        return (
          r.NotificationsExperiment.useExperiment(
            { location: e },
            { autoTrackExposure: !1 }
          ).enabled && t
        );
      }
    },
    437756: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChannelPresetSettings: function () {
            return c;
          },
          useChannelPresetInheritance: function () {
            return N;
          },
          updateChannelPreset: function () {
            return f;
          },
          updateChannelToGuildDefault: function () {
            return E;
          },
          updateChannelUnreadSetting: function () {
            return h;
          },
          updateChannelNotificationSetting: function () {
            return M;
          },
        }),
        n("222007");
      var i = n("65597"),
        a = n("519705"),
        s = n("42203"),
        l = n("282109"),
        o = n("34676"),
        r = n("47495"),
        d = n("277796"),
        u = n("507313"),
        S = n("49111"),
        g = n("133335"),
        _ = n("397336");
      function c(e) {
        let t = (0, i.useStateFromStores)([l.default], () =>
            l.default.resolveUnreadSetting(e)
          ),
          n = (0, i.useStateFromStores)([l.default], () =>
            l.default.resolvedMessageNotifications(e)
          );
        return {
          unread: t,
          notification: n,
          preset: (0, u.presetFromSettings)(t, n),
        };
      }
      function N(e) {
        let t = (0, i.useStateFromStoresArray)([l.default], () =>
            (0, r.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
              ignoreMute: !0,
              ignoreUnreadSetting: !1,
              ignoreNotificationSetting: !1,
            })
          ),
          [n, a] = (0, i.useStateFromStoresArray)(
            [l.default, s.default],
            () => {
              let n = s.default.getChannel(e.parent_id);
              return null != n && t.includes(n.id)
                ? [
                    "parent",
                    (0, u.presetName)(
                      (0, u.presetFromSettings)(
                        l.default.resolveUnreadSetting(n),
                        l.default.resolvedMessageNotifications(n)
                      )
                    ),
                  ]
                : [
                    "guild",
                    (0, u.presetName)(
                      (0, u.presetFromSettings)(
                        l.default.getGuildUnreadSetting(e.guild_id),
                        l.default.getMessageNotifications(e.guild_id)
                      )
                    ),
                  ];
            },
            [e.guild_id, e.parent_id, t]
          );
        return {
          inherited: !t.includes(e.id),
          inheritedFrom: n,
          inheritedPreset: a,
        };
      }
      function f(e, t, n) {
        let i = l.default.getChannelIdFlags(e, t);
        n === u.Presets.ALL_MESSAGES
          ? a.default.updateChannelOverrideSettings(
              e,
              t,
              {
                message_notifications: S.UserNotificationSettings.ALL_MESSAGES,
                flags: (0, d.withChannelUnreadFlags)(
                  i,
                  _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES
                ),
              },
              o.NotificationLabels.PresetAll
            )
          : n === u.Presets.MENTIONS
            ? a.default.updateChannelOverrideSettings(
                e,
                t,
                {
                  message_notifications:
                    S.UserNotificationSettings.ONLY_MENTIONS,
                  flags: (0, d.withChannelUnreadFlags)(
                    i,
                    _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
                  ),
                },
                o.NotificationLabels.PresetMentions
              )
            : n === u.Presets.NOTHING &&
              a.default.updateChannelOverrideSettings(
                e,
                t,
                {
                  message_notifications: S.UserNotificationSettings.NO_MESSAGES,
                  flags: (0, d.withChannelUnreadFlags)(
                    i,
                    _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
                  ),
                },
                o.NotificationLabels.PresetNothing
              );
      }
      function E(e, t) {
        a.default.updateChannelOverrideSettings(
          e,
          t,
          {
            message_notifications: S.UserNotificationSettings.NULL,
            flags: (0, d.resetChannelUnreadFlags)(
              l.default.getChannelIdFlags(e, t)
            ),
          },
          o.NotificationLabels.PresetDefault
        );
      }
      function h(e, t, n) {
        let i = l.default.getChannelIdFlags(e, t);
        a.default.updateChannelOverrideSettings(
          e,
          t,
          {
            flags: (0, d.withChannelUnreadFlags)(
              i,
              n === g.UnreadSetting.ALL_MESSAGES
                ? _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES
                : _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
            ),
          },
          o.NotificationLabel.unreads(n)
        );
      }
      function M(e, t, n) {
        a.default.updateChannelOverrideSettings(
          e,
          t,
          { message_notifications: n },
          o.NotificationLabel.notifications(n)
        );
      }
    },
    277796: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          withGuildUnreadFlags: function () {
            return s;
          },
          resetChannelUnreadFlags: function () {
            return l;
          },
          withChannelUnreadFlags: function () {
            return o;
          },
        });
      var i = n("568734"),
        a = n("397336");
      function s(e, t) {
        var n;
        return i.addFlag(
          ((n = e),
          i.removeFlags(
            n,
            a.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES,
            a.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
          )),
          t
        );
      }
      let l = e =>
        i.removeFlags(
          e,
          a.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES,
          a.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
        );
      function o(e, t) {
        return i.addFlag(l(e), t);
      }
    },
  },
]);
//# sourceMappingURL=0fc5bbfeeedcee08bed9.js.map
