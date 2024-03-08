(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36685"],
  {
    856670: function (e, t, s) {
      "use strict";
      e.exports = s.p + "018197f71e03e53562e7.svg";
    },
    693029: function (e, t, s) {
      "use strict";
      e.exports = s.p + "7e5dd7f59f96cc264184.svg";
    },
    587621: function (e, t, s) {
      "use strict";
      e.exports = s.p + "85d73a66b814f4f52563.png";
    },
    133403: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("414456"),
        l = s.n(n),
        a = s("77078"),
        r = s("782340"),
        d = s("518377");
      let o = Object.freeze({ DEFAULT: d.default, FILLED: d.filled });
      function u(e) {
        let {
          className: t,
          onClick: s,
          "aria-label": n,
          look: u = o.DEFAULT,
        } = e;
        return (0, i.jsx)(a.Clickable, {
          "aria-label": null != n ? n : r.default.Messages.REMOVE,
          className: l(d.button, u, t),
          onClick: s,
        });
      }
      u.Looks = o;
    },
    747593: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return Y;
          },
        }),
        s("222007"),
        s("424973");
      var i,
        n,
        l = s("37983"),
        a = s("884691"),
        r = s("917351"),
        d = s.n(r),
        o = s("866227"),
        u = s.n(o),
        c = s("817736"),
        h = s("118810"),
        N = s("446674"),
        f = s("669491"),
        g = s("77078"),
        S = s("519705"),
        E = s("668597"),
        m = s("320954"),
        T = s("679653"),
        _ = s("419830"),
        x = s("47495"),
        I = s("797226"),
        p = s("308305"),
        C = s("319165"),
        O = s("233069"),
        M = s("42203"),
        v = s("245997"),
        L = s("525065"),
        A = s("305961"),
        j = s("27618"),
        R = s("282109"),
        b = s("697218"),
        G = s("145131"),
        U = s("612434"),
        F = s("449008"),
        D = s("701909"),
        P = s("34676"),
        w = s("49111"),
        H = s("468200"),
        y = s("782340"),
        k = s("293397");
      ((n = i || (i = {})).MUTED = "muted"),
        (n.MESSAGE_NOTIFICATIONS = "message_notifications"),
        (n.SUPPRESS_EVERYONE = "suppress_everyone"),
        (n.SUPPRESS_ROLES = "suppress_roles"),
        (n.MOBILE_PUSH = "mobile_push"),
        (n.MUTE_EVENTS = "mute_scheduled_events"),
        (n.NOTIFY_HIGHLIGHTS = "notify_highlights");
      class B extends a.PureComponent {
        static getDerivedStateFromProps(e, t) {
          let { overrides: s, channelOverridesProp: i } = t;
          return e.channelOverrides !== i
            ? ((s = new Set(s)),
              (0, x.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)),
              { overrides: s, channelOverridesProp: e.channelOverrides })
            : null;
        }
        componentDidUpdate(e, t) {
          let { lastSelected: s } = this.state,
            i = null != s ? this._channelRefs[s] : null;
          if (null != this._scroller && null != i && s !== t.lastSelected) {
            let e = (0, c.findDOMNode)(i);
            if (null != this._scroller && (0, h.isElement)(e, HTMLElement)) {
              var n;
              null === (n = this._scroller) ||
                void 0 === n ||
                n.scrollIntoViewNode({
                  node: e,
                  animate: !0,
                  padding: 20,
                  callback: () => this.setState({ lastSelected: null }),
                }),
                i.highlight();
            }
          }
          if (this.props.channelOverrides !== e.channelOverrides) {
            let { overrides: e } = this.state;
            (e = new Set(e)),
              (0, x.filterOverrides)(this.props.channelOverrides).forEach(t =>
                e.add(t)
              ),
              this.setState({ overrides: e });
          }
        }
        handleCheckboxChange(e, t, s) {
          S.default.updateGuildNotificationSettings(
            this.props.guildId,
            { [e]: t },
            s
          );
        }
        handleRadioChange(e, t, s) {
          let { value: i } = t;
          S.default.updateGuildNotificationSettings(
            this.props.guildId,
            { [e]: i },
            s
          );
        }
        renderHeader() {
          let { guild: e } = this.props;
          return null == e
            ? null
            : (0, l.jsxs)(g.ModalHeader, {
                children: [
                  (0, l.jsxs)(G.default.Child, {
                    children: [
                      (0, l.jsx)(g.Heading, {
                        variant: "heading-lg/semibold",
                        children: y.default.Messages.NOTIFICATION_SETTINGS,
                      }),
                      (0, l.jsx)(g.Text, {
                        variant: "text-md/normal",
                        className: k.guildName,
                        children: e.name,
                      }),
                    ],
                  }),
                  (0, l.jsx)(G.default.Child, {
                    grow: 0,
                    children: (0, l.jsx)(g.ModalCloseButton, {
                      onClick: this.props.onClose,
                    }),
                  }),
                ],
              });
        }
        renderFooter() {
          return (0, l.jsx)(g.ModalFooter, {
            children: (0, l.jsx)(g.Button, {
              onClick: this.props.onClose,
              children: y.default.Messages.DONE,
            }),
          });
        }
        renderMute() {
          var e;
          let { muted: t, muteConfig: s, guild: i } = this.props,
            n =
              null !== (e = null == s ? void 0 : s.selected_time_window) &&
              void 0 !== e
                ? e
                : H.MuteUntilSeconds.ALWAYS;
          return null == i
            ? null
            : (0, l.jsxs)(g.FormItem, {
                className: k.largeSpacing,
                children: [
                  (0, l.jsx)(g.FormSwitch, {
                    hideBorder: !0,
                    value: t,
                    onChange: e =>
                      this.handleCheckboxChange(
                        "muted",
                        e,
                        P.NotificationLabel.muted(e)
                      ),
                    note: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                    children: y.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                      name: i.name,
                    }),
                  }),
                  t
                    ? (0, l.jsxs)(G.default, {
                        className: k.spacing,
                        align: G.default.Align.CENTER,
                        children: [
                          (0, l.jsxs)(G.default, {
                            direction: G.default.Direction.VERTICAL,
                            className: k.muteUntilTextWrapper,
                            children: [
                              (0, l.jsx)(g.FormTitle, {
                                tag: "h3",
                                className: k.muteUntilTitle,
                                children: y.default.Messages.MUTE_UNTIL,
                              }),
                              (0, l.jsx)(C.default, {
                                className: k.muteUntilText,
                                muteConfig: s,
                              }),
                            ],
                          }),
                          (0, l.jsx)(g.SingleSelect, {
                            className: k.muteTimeSelector,
                            options: (0, x.getMuteTimeOptions)(),
                            value: n,
                            onChange: this.handleSelectMuteTime,
                          }),
                        ],
                      })
                    : null,
                  (0, l.jsx)(g.FormDivider, {}),
                ],
              });
        }
        renderServerSettings() {
          var e;
          let {
            messageNotifications: t,
            muted: s,
            memberCount: i,
          } = this.props;
          return (0, l.jsxs)("div", {
            className: k.spacing,
            children: [
              (0, l.jsx)(g.FormItem, {
                title:
                  y.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                className: k.largeSpacing,
                children: (0, l.jsx)(g.RadioGroup, {
                  disabled: s,
                  value: t,
                  onChange: e =>
                    this.handleRadioChange(
                      "message_notifications",
                      e,
                      P.NotificationLabel.notifications(e.value)
                    ),
                  options:
                    ((e = i),
                    [
                      {
                        name: y.default.Messages.FORM_LABEL_ALL_MESSAGES,
                        value: w.UserNotificationSettings.ALL_MESSAGES,
                        desc:
                          null != e && e >= w.MAX_MEMBERS_NOTIFY_ALL_MESSAGES
                            ? y.default.Messages
                                .LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION
                            : null,
                      },
                      {
                        name: y.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                        value: w.UserNotificationSettings.ONLY_MENTIONS,
                      },
                      {
                        name: y.default.Messages.FORM_LABEL_NOTHING,
                        value: w.UserNotificationSettings.NO_MESSAGES,
                      },
                    ]),
                }),
              }),
              (0, l.jsx)(g.FormDivider, {}),
            ],
          });
        }
        renderNotificationOptions() {
          let {
            suppressEveryone: e,
            suppressRoles: t,
            mobilePush: s,
            muted: i,
            muteEvents: n,
            notifyHighlights: a,
            guildId: r,
          } = this.props;
          return (0, l.jsxs)(g.FormItem, {
            className: k.largeSpacing,
            children: [
              (0, l.jsx)(g.FormSwitch, {
                onChange: e =>
                  this.handleCheckboxChange(
                    "suppress_everyone",
                    e,
                    P.NotificationLabel.suppressEveryone(e)
                  ),
                value: e,
                children:
                  y.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
              }),
              (0, l.jsx)(g.FormSwitch, {
                onChange: e =>
                  this.handleCheckboxChange(
                    "suppress_roles",
                    e,
                    P.NotificationLabel.suppressRoles(e)
                  ),
                value: t,
                children: y.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
              }),
              (0, l.jsx)(g.FormSwitch, {
                onChange: e => {
                  S.default.updateGuildNotificationSettings(
                    r,
                    {
                      notify_highlights: e
                        ? w.HighlightSettings.DISABLED
                        : w.HighlightSettings.ENABLED,
                    },
                    P.NotificationLabel.highlights(!e)
                  );
                },
                value: i || a === w.HighlightSettings.DISABLED,
                disabled: i,
                note: (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(g.Text, {
                      variant: "text-sm/normal",
                      children: y.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                    }),
                    (0, l.jsx)("div", {
                      className: k.highlightsLink,
                      children: (0, l.jsx)(g.Anchor, {
                        href: D.default.getArticleURL(
                          w.HelpdeskArticles.HIGHLIGHTS
                        ),
                        children: y.default.Messages.HIGHLIGHTS_LEARN_MORE,
                      }),
                    }),
                  ],
                }),
                children: (0, l.jsx)(l.Fragment, {
                  children: y.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                }),
              }),
              (0, l.jsx)(g.FormSwitch, {
                value: n,
                onChange: e =>
                  this.handleCheckboxChange(
                    "mute_scheduled_events",
                    e,
                    P.NotificationLabel.mutedEvents(e)
                  ),
                children: y.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
              }),
              (0, l.jsx)(g.FormSwitch, {
                value: !i && s,
                disabled: i,
                onChange: e =>
                  this.handleCheckboxChange(
                    "mobile_push",
                    e,
                    P.NotificationLabel.mobilePush(e)
                  ),
                children:
                  y.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
              }),
            ],
          });
        }
        renderOverrideSelect() {
          let { channels: e, categories: t } = this.props,
            s = d(e)
              .filter(e => {
                let { channel: s } = e;
                return (
                  s.type !== w.ChannelTypes.GUILD_CATEGORY ||
                  (null != t[s.id] && t[s.id].length > 0)
                );
              })
              .map(e => {
                let { channel: t } = e;
                return {
                  value: t.id,
                  label: (0, T.computeChannelName)(t, b.default, j.default),
                };
              })
              .value();
          return (0, l.jsxs)(g.FormItem, {
            title: y.default.Messages.NOTIFICATION_OVERRIDES,
            className: k.largeSpacing,
            children: [
              (0, l.jsx)(g.FormText, {
                type: g.FormText.Types.DESCRIPTION,
                className: k.smallSpacing,
                children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE,
              }),
              (0, l.jsx)(g.SearchableSelect, {
                value: w.EMPTY_STRING_SNOWFLAKE_ID,
                placeholder: y.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
                renderOptionLabel: this.renderOptionLabel,
                options: s,
                onChange: this.handleSelectChange,
              }),
            ],
          });
        }
        renderChannelNotifications() {
          let {
              channelOverrides: e,
              muted: t,
              channels: s,
              messageNotifications: i,
              categories: n,
              checkboxColor: a,
            } = this.props,
            { overrides: r } = this.state,
            d = s
              .map(s => {
                let { channel: d } = s;
                if (!r.has(d.id) || (null != n[d.id] && 0 === n[d.id].length))
                  return null;
                let o = e[d.id];
                return (0, l.jsx)(
                  p.ChannelNotificationSettings,
                  {
                    ref: e => {
                      this._channelRefs[d.id] = e;
                    },
                    channel: d,
                    guildMuted: t,
                    muted: null != o && (0, E.computeIsMuted)(o),
                    messageNotifications:
                      null != o ? o.message_notifications : null,
                    guildMessageNotifications: i,
                    onDelete: this.handleDeleteOverride,
                    checkboxColor: a,
                  },
                  d.id
                );
              })
              .filter(F.isNotNullish);
          return (
            (0 === r.size || 0 === d.length) &&
              d.push(
                (0, l.jsx)(
                  "div",
                  {
                    className: k.overridePlaceholder,
                    children: (0, l.jsx)(g.Text, {
                      className: k.overrideHeader,
                      variant: "text-sm/semibold",
                      children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE,
                    }),
                  },
                  "placeholder"
                )
              ),
            (0, l.jsxs)("div", {
              className: k.overrideList,
              children: [
                (0, l.jsxs)(G.default, {
                  children: [
                    (0, l.jsx)(g.Heading, {
                      variant: "eyebrow",
                      className: k.headerName,
                      children: y.default.Messages.CHANNEL_OR_CATEGORY,
                    }),
                    (0, l.jsx)(g.Heading, {
                      variant: "eyebrow",
                      className: k.headerOption,
                      children: y.default.Messages.FORM_LABEL_ALL,
                    }),
                    (0, l.jsx)(g.Heading, {
                      variant: "eyebrow",
                      className: k.headerOption,
                      children: y.default.Messages.FORM_LABEL_MENTIONS,
                    }),
                    (0, l.jsx)(g.Heading, {
                      variant: "eyebrow",
                      className: k.headerOption,
                      children: y.default.Messages.FORM_LABEL_NOTHING,
                    }),
                    (0, l.jsx)(g.Heading, {
                      variant: "eyebrow",
                      className: k.headerOption,
                      children: (0, l.jsx)(g.Tooltip, {
                        text: y.default.Messages
                          .FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                        position: "bottom",
                        children: e =>
                          (0, l.jsx)("span", {
                            ...e,
                            children: y.default.Messages.SOUND_MUTE,
                          }),
                      }),
                    }),
                  ],
                }),
                d,
              ],
            })
          );
        }
        render() {
          return (0, l.jsxs)(g.ModalRoot, {
            "aria-label": y.default.Messages.NOTIFICATION_SETTINGS,
            size: g.ModalSize.MEDIUM,
            transitionState: this.props.transitionState,
            children: [
              this.renderHeader(),
              (0, l.jsxs)(g.ModalContent, {
                scrollerRef: this.setScrollerRef,
                children: [
                  this.renderMute(),
                  this.renderServerSettings(),
                  this.renderNotificationOptions(),
                  this.renderOverrideSelect(),
                  this.renderChannelNotifications(),
                ],
              }),
              this.renderFooter(),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this._scroller = null),
            (this._channelRefs = {}),
            (this.state = {
              overrides: new Set(
                (0, x.filterOverrides)(this.props.channelOverrides)
              ),
              channelOverridesProp: this.props.channelOverrides,
              lastSelected: null,
            }),
            (this.setScrollerRef = e => {
              this._scroller = e;
            }),
            (this.handleSelectChange = e => {
              if (null == e) return;
              let { overrides: t } = this.state;
              (t = new Set(t)).add(e),
                this.setState({ overrides: t, lastSelected: e });
            }),
            (this.handleSelectMuteTime = e => {
              let t = e > 0 ? u().add(e, "second").toISOString() : null;
              S.default.updateGuildNotificationSettings(
                this.props.guildId,
                {
                  muted: !0,
                  mute_config: { selected_time_window: e, end_time: t },
                },
                P.NotificationLabels.Muted
              );
            }),
            (this.handleDeleteOverride = e => {
              let { overrides: t } = this.state;
              (t = new Set(t)).delete(e), this.setState({ overrides: t });
            }),
            (this.renderOptionLabel = e => {
              let t = M.default.getChannel(e.value);
              if (null == t) return e.label;
              let s = M.default.getChannel(t.parent_id),
                i = null != s ? s.name : null;
              return (0, l.jsx)(U.default, {
                icon: (0, _.getChannelIconComponent)(t),
                title: e.label,
                subtitle: i,
              });
            });
        }
      }
      function V(e) {
        let { guildId: t, ...s } = e,
          i = (0, N.useStateFromStoresObject)(
            [v.default, A.default, L.default, R.default],
            () => {
              let e = v.default.getCategories(t);
              return {
                guildId: t,
                categories: e,
                guild: A.default.getGuild(t),
                memberCount: L.default.getMemberCount(t),
                suppressEveryone: R.default.isSuppressEveryoneEnabled(t),
                suppressRoles: R.default.isSuppressRolesEnabled(t),
                muteEvents: R.default.isMuteScheduledEventsEnabled(t),
                mobilePush: R.default.isMobilePushEnabled(t),
                muted: R.default.isMuted(t),
                muteConfig: R.default.getMuteConfig(t),
                messageNotifications: R.default.getMessageNotifications(t),
                channelOverrides: R.default.getChannelOverrides(t),
                channels: (0, m.default)(e._categories, e, e => {
                  let {
                    channel: { type: t },
                  } = e;
                  return (
                    (0, O.isGuildSelectableChannelType)(t) ||
                    t === w.ChannelTypes.GUILD_CATEGORY
                  );
                }),
                notifyHighlights: R.default.getNotifyHighlights(t),
              };
            }
          ),
          n = (0, g.useToken)(f.default.unsafe_rawColors.GREEN_360).hex();
        return (0, l.jsx)(B, { ...i, ...s, checkboxColor: n });
      }
      function Y(e) {
        let t = (0, x.useShouldUseNewNotificationSystem)(
            "NotificationSettingsModal"
          ),
          s = t ? I.default : V;
        return (0, l.jsx)(s, { ...e });
      }
    },
    524173: function (e, t, s) {
      "use strict";
      s.r(t);
      var i = s("589723");
      s.es(i, t);
    },
    225389: function (e, t, s) {
      "use strict";
      s.r(t);
      var i = s("331008");
      s.es(i, t);
    },
    833222: function (e, t, s) {
      "use strict";
      s.r(t);
      var i = s("583103");
      s.es(i, t);
    },
    546770: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          updateGuildPreset: function () {
            return u;
          },
        }),
        s("65597");
      var i = s("519705"),
        n = s("282109"),
        l = s("34676"),
        a = s("277796"),
        r = s("507313"),
        d = s("49111"),
        o = s("397336");
      function u(e, t) {
        let s = n.default.getGuildFlags(e);
        t === r.Presets.ALL_MESSAGES
          ? i.default.updateGuildNotificationSettings(
              e,
              {
                message_notifications: d.UserNotificationSettings.ALL_MESSAGES,
                flags: (0, a.withGuildUnreadFlags)(
                  s,
                  o.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES
                ),
              },
              l.NotificationLabels.PresetAll
            )
          : t === r.Presets.MENTIONS
            ? i.default.updateGuildNotificationSettings(
                e,
                {
                  message_notifications:
                    d.UserNotificationSettings.ONLY_MENTIONS,
                  flags: (0, a.withGuildUnreadFlags)(
                    s,
                    o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
                  ),
                },
                l.NotificationLabels.PresetMentions
              )
            : t === r.Presets.NOTHING &&
              i.default.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: d.UserNotificationSettings.NO_MESSAGES,
                  flags: (0, a.withGuildUnreadFlags)(
                    s,
                    o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
                  ),
                },
                l.NotificationLabels.PresetNothing
              );
      }
    },
    286844: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getPushNotificationSelectOptions: function () {
            return a;
          },
          getUnreadSelectOptions: function () {
            return r;
          },
        });
      var i = s("49111"),
        n = s("133335"),
        l = s("782340");
      let a = e => [
          {
            label:
              l.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
            value: i.UserNotificationSettings.ALL_MESSAGES,
          },
          {
            label:
              l.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
            value: i.UserNotificationSettings.ONLY_MENTIONS,
          },
          {
            label: l.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
            value: i.UserNotificationSettings.NO_MESSAGES,
          },
        ],
        r = e => [
          {
            label:
              l.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
            value: n.UnreadSetting.ALL_MESSAGES,
          },
          {
            value: n.UnreadSetting.ONLY_MENTIONS,
            label:
              l.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
            disabled:
              (null == e ? void 0 : e.notificationSetting) ===
              i.UserNotificationSettings.ALL_MESSAGES,
          },
        ];
    },
    661740: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        });
      var i = s("884691");
      function n(e, t) {
        let s = i.useRef(e);
        i.useEffect(() => {
          e.length > s.current.length && t(), (s.current = e);
        }, [e, t]);
      }
    },
    149943: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return N;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("446674"),
        l = s("225389"),
        a = s("77078"),
        r = s("519705"),
        d = s("282109"),
        o = s("34676"),
        u = s("49111"),
        c = s("782340"),
        h = s("690787");
      function N(e) {
        let { guildId: t } = e,
          s = (0, n.useStateFromStoresObject)([d.default], () => ({
            highligths: d.default.getNotifyHighlights(t),
            mobilePush: d.default.isMobilePushEnabled(t),
            suppressRoles: d.default.isSuppressRolesEnabled(t),
            suppressEveryone: d.default.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: d.default.isMuteScheduledEventsEnabled(t),
          })),
          N = r.default.updateGuildNotificationSettings;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(f, {
              value: s.suppressEveryone,
              title: c.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
              onChange: e =>
                N(
                  t,
                  { suppress_everyone: e },
                  o.NotificationLabel.suppressEveryone(e)
                ),
            }),
            (0, i.jsx)(f, {
              value: s.suppressRoles,
              title: c.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
              onChange: e =>
                N(
                  t,
                  { suppress_roles: e },
                  o.NotificationLabel.suppressRoles(e)
                ),
            }),
            (0, i.jsx)(f, {
              title: (0, i.jsxs)("div", {
                className: h.advanceSettingTitle,
                children: [
                  c.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                  (0, i.jsx)(a.Tooltip, {
                    text: c.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                    children: e => {
                      let { onMouseEnter: t, onMouseLeave: s } = e;
                      return (0, i.jsx)(l.CircleInformationIcon, {
                        width: 14,
                        height: 14,
                        onMouseEnter: t,
                        onMouseLeave: s,
                        color: a.tokens.colors.ICON_MUTED,
                        className: h.settingTitleIcon,
                      });
                    },
                  }),
                ],
              }),
              value: s.highligths === u.HighlightSettings.ENABLED,
              onChange: e =>
                N(
                  t,
                  {
                    notify_highlights: e
                      ? u.HighlightSettings.ENABLED
                      : u.HighlightSettings.DISABLED,
                  },
                  o.NotificationLabel.highlights(e)
                ),
            }),
            (0, i.jsx)(f, {
              value: s.muteScheduledEvents,
              title: c.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
              onChange: e =>
                N(
                  t,
                  { mute_scheduled_events: e },
                  o.NotificationLabel.mutedEvents(e)
                ),
            }),
            (0, i.jsx)(f, {
              value: s.mobilePush,
              title: c.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
              onChange: e =>
                N(t, { mobile_push: e }, o.NotificationLabel.mobilePush(e)),
            }),
          ],
        });
      }
      function f(e) {
        return (0, i.jsx)(a.FormSwitch, {
          hideBorder: !0,
          className: h.advanceSetting,
          value: e.value,
          onChange: e.onChange,
          note: e.subtitle,
          children: e.title,
        });
      }
    },
    784905: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return b;
          },
        }),
        s("222007");
      var i = s("37983"),
        n = s("884691"),
        l = s("414456"),
        a = s.n(l),
        r = s("446674"),
        d = s("669491"),
        o = s("77078"),
        u = s("272030"),
        c = s("519705"),
        h = s("133403"),
        N = s("679653"),
        f = s("625399"),
        g = s("419830"),
        S = s("42203"),
        E = s("245997"),
        m = s("27618"),
        T = s("282109"),
        _ = s("697218"),
        x = s("449008"),
        I = s("34676"),
        p = s("47495"),
        C = s("437756"),
        O = s("277796"),
        M = s("507313"),
        v = s("661740"),
        L = s("432082"),
        A = s("49111"),
        j = s("782340"),
        R = s("661437");
      function b(e) {
        let { guildId: t, requestScrollToBottom: s } = e,
          n = (0, r.useStateFromStoresArray)([S.default, T.default], () => {
            let e = (0, p.filterOverrides)(T.default.getChannelOverrides(t), {
              ignoreMute: !0,
              ignoreUnreadSetting: !1,
              ignoreNotificationSetting: !1,
            });
            return e.map(e => S.default.getChannel(e)).filter(x.isNotNullish);
          });
        (0, v.default)(n, () => s());
        let l = (0, r.useStateFromStores)([E.default], () =>
            E.default.getCategories(t)
          ),
          a = n.map((e, t) =>
            (0, i.jsxs)(
              "div",
              {
                className: R.channelRow,
                children: [
                  (0, i.jsx)(G, { channel: e, categories: l }, e.id),
                  t < n.length - 1 &&
                    (0, i.jsx)("div", { className: R.separator }),
                ],
              },
              e.id
            )
          );
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(L.default, {
              guildId: t,
              onSelected: e => {
                if (null != n.find(t => t.id === e)) return;
                let s = S.default.getChannel(e);
                null != s &&
                  c.default.updateChannelOverrideSettings(
                    t,
                    e,
                    {
                      muted: !1,
                      message_notifications:
                        T.default.resolvedMessageNotifications(s),
                      flags: (0, O.withChannelUnreadFlags)(
                        T.default.getChannelIdFlags(s.guild_id, s.id),
                        T.default.resolveUnreadSetting(s)
                      ),
                    },
                    I.NotificationLabels.OverrideCreated
                  );
              },
            }),
            a.length > 0 &&
              (0, i.jsxs)("div", {
                className: R.table,
                children: [
                  (0, i.jsxs)("div", {
                    className: R.row,
                    children: [
                      (0, i.jsx)(o.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: R.rowName,
                        children: j.default.Messages.CHANNEL_OR_CATEGORY,
                      }),
                      (0, i.jsx)(o.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: R.rowOption,
                        children: j.default.Messages.NOTIFICATION_PRESET_1,
                      }),
                      (0, i.jsx)(o.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: R.rowOption,
                        children: j.default.Messages.NOTIFICATION_PRESET_2,
                      }),
                      (0, i.jsx)(o.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: R.rowOption,
                        children: j.default.Messages.NOTIFICATION_PRESET_3,
                      }),
                      (0, i.jsx)(o.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: R.rowOption,
                        children: j.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                      }),
                    ],
                  }),
                  a.length > 0 &&
                    (0, i.jsx)("div", { className: R.channels, children: a }),
                ],
              }),
          ],
        });
      }
      function G(e) {
        let { channel: t, categories: s } = e,
          l = (0, o.useToken)(d.default.unsafe_rawColors.GREEN_360).hex(),
          c = (0, r.useStateFromStores)([S.default], () =>
            S.default.getChannel(null == t ? void 0 : t.parent_id)
          ),
          E = (0, C.useChannelPresetSettings)(t),
          [T, x] = n.useState(!1);
        if (null == t) return null;
        let I = j.default.Messages.NO_CATEGORY,
          p = (0, g.getChannelIconComponent)(t);
        t.type === A.ChannelTypes.GUILD_CATEGORY &&
        null != t.guild_id &&
        "" !== t.guild_id
          ? (I = j.default.Messages.NUM_CHANNELS.format({
              num: null != s[t.id] ? s[t.id].length : 0,
            }))
          : null != c &&
            (I = j.default.Messages.IN_CATEGORY.format({
              categoryName: (0, N.computeChannelName)(c, _.default, m.default),
            }));
        let O = T ? M.Presets.CUSTOM : E.preset;
        return (0, i.jsx)("div", {
          children: (0, i.jsxs)("div", {
            className: a(R.row, R.channel),
            children: [
              (0, i.jsxs)("div", {
                className: a(R.rowName, R.modColor),
                children: [
                  null != p
                    ? (0, i.jsx)(p, {
                        height: 20,
                        width: 20,
                        className: R.icon,
                      })
                    : null,
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        className: R.modColor,
                        children: (0, N.computeChannelName)(
                          t,
                          _.default,
                          m.default
                        ),
                      }),
                      (0, i.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        className: R.modColor,
                        children: I,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: R.rowOption,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(o.Checkbox, {
                    color: l,
                    shape: o.Checkbox.Shapes.ROUND,
                    type: o.Checkbox.Types.INVERTED,
                    value: O === M.Presets.ALL_MESSAGES,
                    onChange: () => (
                      (0, C.updateChannelPreset)(
                        t.guild_id,
                        t.id,
                        M.Presets.ALL_MESSAGES
                      ),
                      x(!1)
                    ),
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: R.rowOption,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(o.Checkbox, {
                    color: l,
                    shape: o.Checkbox.Shapes.ROUND,
                    type: o.Checkbox.Types.INVERTED,
                    value: O === M.Presets.MENTIONS,
                    onChange: () => (
                      (0, C.updateChannelPreset)(
                        t.guild_id,
                        t.id,
                        M.Presets.MENTIONS
                      ),
                      x(!1)
                    ),
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: R.rowOption,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(o.Checkbox, {
                    color: l,
                    shape: o.Checkbox.Shapes.ROUND,
                    type: o.Checkbox.Types.INVERTED,
                    value: O === M.Presets.NOTHING,
                    onChange: () => (
                      (0, C.updateChannelPreset)(
                        t.guild_id,
                        t.id,
                        M.Presets.NOTHING
                      ),
                      x(!1)
                    ),
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: R.rowOption,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(o.Checkbox, {
                    onClick: e => {
                      (0, u.openContextMenu)(e, () =>
                        (0, i.jsx)(o.Menu, {
                          navId: "ChannelNotificationCustomSettingsItems",
                          "aria-label":
                            j.default.Messages
                              .NOTIFICATION_SETTINGS_CHANNELS_CUSTOM_MENU_ARIA_LABEL,
                          onClose: () => {},
                          onSelect: () => {},
                          children: (0,
                          f.useChannelNotificationCustomSettingsItem)(t, () =>
                            x(!1)
                          ),
                        })
                      );
                    },
                    color: l,
                    shape: o.Checkbox.Shapes.ROUND,
                    type: o.Checkbox.Types.INVERTED,
                    value: O === M.Presets.CUSTOM,
                    onChange: () => x(!0),
                  }),
                }),
              }),
              (0, i.jsx)(h.default, {
                onClick: () =>
                  (0, C.updateChannelToGuildDefault)(t.guild_id, t.id),
                className: R.removeButton,
              }),
            ],
          }),
        });
      }
    },
    432082: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return x;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("917351"),
        l = s.n(n),
        a = s("446674"),
        r = s("77078"),
        d = s("320954"),
        o = s("679653"),
        u = s("419830"),
        c = s("233069"),
        h = s("42203"),
        N = s("245997"),
        f = s("27618"),
        g = s("697218"),
        S = s("612434"),
        E = s("49111"),
        m = s("782340"),
        T = s("772681");
      let _ = e => {
        let {
          channel: { type: t },
        } = e;
        return (
          (0, c.isGuildSelectableChannelType)(t) ||
          t === E.ChannelTypes.GUILD_CATEGORY
        );
      };
      function x(e) {
        var t;
        let { guildId: s, onSelected: n } = e;
        let { channels: c, categories: x } =
            ((t = s),
            (0, a.useStateFromStoresObject)([N.default], () => {
              let e = N.default.getCategories(t);
              return {
                channels: (0, d.default)(e._categories, e, _),
                categories: e,
              };
            })),
          I = l(c)
            .filter(e => {
              let { channel: t } = e;
              return (
                t.type !== E.ChannelTypes.GUILD_CATEGORY ||
                (null != x[t.id] && x[t.id].length > 0)
              );
            })
            .map(e => {
              let { channel: t } = e;
              return {
                value: t.id,
                label: (0, o.computeChannelName)(t, g.default, f.default),
              };
            })
            .value();
        return (0, i.jsxs)(r.FormItem, {
          children: [
            (0, i.jsx)(r.FormText, {
              type: r.FormText.Types.DESCRIPTION,
              children: m.default.Messages.ADD_CHANNEL_TO_OVERRIDE,
            }),
            (0, i.jsx)("div", {
              className: T.input,
              children: (0, i.jsx)(r.SearchableSelect, {
                value: E.EMPTY_STRING_SNOWFLAKE_ID,
                onChange: n,
                options: I,
                renderOptionLabel: e => {
                  let t = h.default.getChannel(e.value);
                  if (null == t) return e.label;
                  let s = h.default.getChannel(t.parent_id),
                    n = null != s ? s.name : null;
                  return (0, i.jsx)(S.default, {
                    icon: (0, u.getChannelIconComponent)(t),
                    title: e.label,
                    subtitle: n,
                  });
                },
                placeholder: m.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
              }),
            }),
          ],
        });
      }
    },
    797226: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        });
      var i = s("37983"),
        n = s("884691"),
        l = s("414456"),
        a = s.n(l),
        r = s("77078"),
        d = s("660279"),
        o = s("149943"),
        u = s("784905"),
        c = s("489618"),
        h = s("205382"),
        N = s("782340"),
        f = s("266219");
      function g(e) {
        return (0, i.jsx)("div", {
          className: f.sectionHeader,
          children: (0, i.jsx)(r.Heading, {
            variant: "text-xs/bold",
            className: f.sectionHeaderTitle,
            color: "text-muted",
            children: e.title,
          }),
        });
      }
      function S(e) {
        return (0, i.jsxs)("div", {
          children: [
            null != e.title && (0, i.jsx)(g, { title: e.title }),
            (0, i.jsx)("div", {
              className: a(f.sectionContent, {
                [f.sectionContentPadding]: !0 !== e.noPadding,
              }),
              children: e.children,
            }),
          ],
        });
      }
      function E(e) {
        let { onClose: t } = e;
        return (0, i.jsxs)(r.ModalHeader, {
          className: f.header,
          children: [
            (0, i.jsxs)("div", {
              className: f.headerLeft,
              children: [
                (0, i.jsx)(d.default, { className: f.headerBell }),
                (0, i.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: N.default.Messages.NOTIFICATION_SETTINGS,
                }),
              ],
            }),
            (0, i.jsx)(r.ModalCloseButton, { onClick: t }),
          ],
        });
      }
      function m(e) {
        let t = n.useRef(null);
        return (0, i.jsxs)(r.ModalRoot, {
          size: r.ModalSize.MEDIUM,
          transitionState: e.transitionState,
          "aria-label": N.default.Messages.NOTIFICATION_SETTINGS,
          children: [
            (0, i.jsx)(E, { onClose: e.onClose }),
            (0, i.jsxs)(r.ModalContent, {
              className: f.content,
              scrollerRef: t,
              children: [
                (0, i.jsx)(S, {
                  children: (0, i.jsx)(c.default, { guildId: e.guildId }),
                }),
                (0, i.jsx)(S, {
                  title: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS,
                  noPadding: !0,
                  children: (0, i.jsx)(h.default, { guildId: e.guildId }),
                }),
                (0, i.jsx)(S, {
                  title: N.default.Messages.NOTIFICATION_SETTINGS_ADVANCED,
                  children: (0, i.jsx)(o.default, { guildId: e.guildId }),
                }),
                (0, i.jsx)(g, {
                  title: N.default.Messages.CHANNEL_NOTIFICATION_OVERRIDES,
                }),
                (0, i.jsx)(u.default, {
                  guildId: e.guildId,
                  requestScrollToBottom: () => {
                    null != t &&
                      null != t.current &&
                      t.current.scrollToBottom({ animate: !0 });
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    489618: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return S;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("866227"),
        l = s.n(n),
        a = s("65597"),
        r = s("77078"),
        d = s("519705"),
        o = s("305961"),
        u = s("282109"),
        c = s("34676"),
        h = s("47495"),
        N = s("468200"),
        f = s("782340"),
        g = s("917315");
      function S(e) {
        var t;
        let { guildId: s } = e,
          n = (0, a.default)([o.default], () => o.default.getGuild(s)),
          S = (0, a.default)([u.default], () => u.default.isMuted(s)),
          E = (0, a.default)([u.default], () => u.default.getMuteConfig(s));
        return null == n
          ? null
          : (0, i.jsxs)(r.FormItem, {
              children: [
                (0, i.jsx)(r.FormSwitch, {
                  hideBorder: !0,
                  value: S,
                  onChange: e => {
                    d.default.updateGuildNotificationSettings(
                      s,
                      { muted: e },
                      c.NotificationLabel.muted(e)
                    );
                  },
                  style: { marginBottom: 0 },
                  note: f.default.Messages.FOR_LABEL_MUTE_SEVER_DESCRIPTION_V2,
                  children: f.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                    name: n.name,
                  }),
                }),
                S &&
                  (0, i.jsxs)("div", {
                    className: g.mutedConfig,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(r.FormTitle, {
                            tag: "h3",
                            children: f.default.Messages.MUTE_UNTIL,
                          }),
                          (0, i.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: (function (e) {
                              return null == e || null == e.end_time
                                ? null
                                : f.default.Messages.MUTED_UNTIL_TIME.format({
                                    endTime: new Date(
                                      e.end_time
                                    ).toLocaleString(f.default.getLocale(), {
                                      month: "numeric",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "2-digit",
                                    }),
                                  });
                            })(E),
                          }),
                        ],
                      }),
                      (0, i.jsx)(r.SingleSelect, {
                        onChange: e => {
                          let t =
                            e > 0 ? l().add(e, "second").toISOString() : null;
                          d.default.updateGuildNotificationSettings(
                            s,
                            {
                              mute_config: {
                                selected_time_window: e,
                                end_time: t,
                              },
                              muted: !0,
                            },
                            c.NotificationLabels.Muted
                          );
                        },
                        options: (0, h.getMuteTimeOptions)(),
                        value:
                          null !==
                            (t = null == E ? void 0 : E.selected_time_window) &&
                          void 0 !== t
                            ? t
                            : N.MuteUntilSeconds.ALWAYS,
                      }),
                    ],
                  }),
              ],
            });
      }
    },
    205382: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return v;
          },
        }),
        s("222007"),
        s("702976");
      var i = s("37983"),
        n = s("884691"),
        l = s("414456"),
        a = s.n(l),
        r = s("65597"),
        d = s("225389"),
        o = s("833222"),
        u = s("77078"),
        c = s("519705"),
        h = s("282109"),
        N = s("593195"),
        f = s("956089"),
        g = s("34676"),
        S = s("277796"),
        E = s("546770"),
        m = s("286844"),
        T = s("507313"),
        _ = s("49111"),
        x = s("133335"),
        I = s("397336"),
        p = s("782340"),
        C = s("10149"),
        O = s("587621");
      let M = () => [
        {
          value: T.Presets.ALL_MESSAGES,
          name: p.default.Messages.NOTIFICATION_PRESET_1,
        },
        {
          value: T.Presets.MENTIONS,
          name: p.default.Messages.NOTIFICATION_PRESET_2,
        },
        {
          value: T.Presets.NOTHING,
          name: p.default.Messages.NOTIFICATION_PRESET_3,
        },
        {
          value: T.Presets.CUSTOM,
          name: p.default.Messages.NOTIFICATION_PRESET_CUSTOM,
        },
      ];
      function v(e) {
        let { guildId: t } = e,
          s = (0, r.default)([h.default], () => h.default.getGuildFlags(t)),
          l = (0, r.default)([h.default], () => {
            let e = h.default.getGuildUnreadSetting(t),
              s = h.default.getMessageNotifications(t);
            return e === x.UnreadSetting.UNSET
              ? s === _.UserNotificationSettings.ALL_MESSAGES
                ? x.UnreadSetting.ALL_MESSAGES
                : x.UnreadSetting.ONLY_MENTIONS
              : e;
          }),
          a = (0, r.default)([h.default], () =>
            h.default.getMessageNotifications(t)
          ),
          [N, f] = (0, n.useState)(!1),
          O = N ? T.Presets.CUSTOM : (0, T.presetFromSettings)(l, a),
          v = e => {
            if (e === T.Presets.CUSTOM) {
              f(!0);
              return;
            }
            f(!1), (0, E.updateGuildPreset)(t, e);
          };
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("div", {
              className: C.segmentedControlsContainer,
              children: (0, i.jsx)(u.SegmentedControl, {
                value: O,
                options: M(),
                onChange: e => {
                  let { value: t } = e;
                  return v(t);
                },
                className: C.segmentedControl,
                look: "pill",
              }),
            }),
            (0, i.jsx)("div", { className: C.presetSeparator }),
            (0, i.jsxs)("div", {
              className: C.customPresetsContainer,
              children: [
                (0, i.jsxs)("div", {
                  className: C.grid,
                  children: [
                    (0, i.jsx)(L, { unreadSetting: l }),
                    (0, i.jsx)(A, { notificationSetting: a }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: C.grid,
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(u.Text, {
                          variant: "text-sm/semibold",
                          color: "header-primary",
                          children:
                            p.default.Messages
                              .NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE,
                        }),
                        (0, i.jsx)(u.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children:
                            p.default.Messages
                              .NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(u.Text, {
                          variant: "text-sm/semibold",
                          color: "header-primary",
                          children:
                            p.default.Messages
                              .NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE,
                        }),
                        (0, i.jsx)(u.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children:
                            p.default.Messages
                              .NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: C.grid,
                  children: [
                    (0, i.jsx)(u.SingleSelect, {
                      value: l,
                      className: C.input,
                      onChange: e => {
                        f(!1),
                          c.default.updateGuildNotificationSettings(
                            t,
                            {
                              flags: (0, S.withGuildUnreadFlags)(
                                s,
                                e === x.UnreadSetting.ALL_MESSAGES
                                  ? I.GuildNotificationSettingsFlags
                                      .UNREADS_ALL_MESSAGES
                                  : I.GuildNotificationSettingsFlags
                                      .UNREADS_ONLY_MENTIONS
                              ),
                            },
                            g.NotificationLabel.unreads(e)
                          );
                      },
                      options: (0, m.getUnreadSelectOptions)({
                        notificationSetting: a,
                      }),
                      renderOptionLabel: e => {
                        let t =
                          e.disabled &&
                          e.value === x.UnreadSetting.ONLY_MENTIONS &&
                          l !== x.UnreadSetting.ONLY_MENTIONS;
                        return (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: e.disabled ? "text-muted" : void 0,
                                children: e.label,
                              }),
                            }),
                            t &&
                              (0, i.jsx)(u.Tooltip, {
                                text: p.default.Messages
                                  .NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED,
                                children: e =>
                                  (0, i.jsx)(o.DenyIcon, {
                                    ...e,
                                    width: 20,
                                    height: 20,
                                    className: C.muted,
                                  }),
                              }),
                          ],
                        });
                      },
                    }),
                    (0, i.jsx)(u.SingleSelect, {
                      className: C.input,
                      value: a,
                      onChange: e => {
                        f(!1);
                        let s = { message_notifications: e };
                        e === _.UserNotificationSettings.ALL_MESSAGES &&
                          l !== x.UnreadSetting.ALL_MESSAGES &&
                          (s.flags = (0, S.withGuildUnreadFlags)(
                            h.default.getGuildFlags(t),
                            I.GuildNotificationSettingsFlags
                              .UNREADS_ALL_MESSAGES
                          )),
                          c.default.updateGuildNotificationSettings(
                            t,
                            s,
                            g.NotificationLabel.notifications(e)
                          );
                      },
                      options: (0, m.getPushNotificationSelectOptions)({
                        notificationSetting: a,
                      }),
                      renderOptionLabel: e => {
                        let t =
                          e.value === _.UserNotificationSettings.ALL_MESSAGES &&
                          l !== x.UnreadSetting.ALL_MESSAGES &&
                          a !== _.UserNotificationSettings.ALL_MESSAGES;
                        return (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(u.Text, {
                              variant: "text-md/normal",
                              children: e.label,
                            }),
                            t &&
                              (0, i.jsx)(u.Tooltip, {
                                text: p.default.Messages
                                  .NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING,
                                children: e =>
                                  (0, i.jsx)(d.CircleInformationIcon, {
                                    ...e,
                                    width: 20,
                                    height: 20,
                                    className: C.muted,
                                  }),
                              }),
                          ],
                        });
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function L(e) {
        let { unreadSetting: t } = e,
          s = [
            {
              badged: !0,
              unread: !0,
              muted: !1,
              name: p.default.Messages
                .NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1,
            },
            {
              badged: !1,
              unread: !0,
              muted: !0,
              name: p.default.Messages
                .NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2,
            },
            {
              badged: !1,
              unread: !1,
              muted: !0,
              name: p.default.Messages
                .NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3,
            },
          ];
        return (
          t === x.UnreadSetting.ALL_MESSAGES && (s[1].muted = !1),
          (0, i.jsx)("div", {
            className: C.channeList,
            children: s.map(e =>
              (0, i.jsxs)(
                "div",
                {
                  className: C.channelListChannel,
                  children: [
                    (0, i.jsxs)("div", {
                      className: C.channelListChannelName,
                      children: [
                        (0, i.jsx)("div", {
                          className: a(C.unread, {
                            [C.hidden]: !e.unread,
                            [C.unreadMuted]: e.muted,
                          }),
                        }),
                        (0, i.jsx)(N.default, {
                          height: 12,
                          width: 12,
                          className: a(C.channelListChannelIcon, {
                            [C.muted]: e.muted,
                          }),
                        }),
                        (0, i.jsx)(u.Text, {
                          variant: "text-xs/normal",
                          color: e.muted ? "text-muted" : void 0,
                          children: e.name,
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: a(C.badge, { [C.hidden]: !e.badged }),
                      children: (0, i.jsx)(f.NumberBadge, { count: 1 }),
                    }),
                  ],
                },
                e.name
              )
            ),
          })
        );
      }
      function A(e) {
        return (0, i.jsxs)("div", {
          className: C.mockMessage,
          children: [
            e.notificationSetting === _.UserNotificationSettings.NO_MESSAGES &&
              (0, i.jsx)("div", { className: C.mockMessageDisabled }),
            (0, i.jsx)("div", {
              children: (0, i.jsx)("img", {
                className: C.mockMessageAvatar,
                src: O,
                alt: "",
              }),
            }),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(u.Text, {
                  variant: "text-xs/medium",
                  children:
                    p.default.Messages
                      .NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR,
                }),
                e.notificationSetting ===
                  _.UserNotificationSettings.ALL_MESSAGES &&
                  (0, i.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children:
                      p.default.Messages
                        .NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE,
                  }),
                e.notificationSetting !==
                  _.UserNotificationSettings.ALL_MESSAGES &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: ["@Roka", " "],
                      }),
                      (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tag: "span",
                        children:
                          p.default.Messages
                            .NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
    308305: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ChannelNotificationSettings: function () {
            return T;
          },
        }),
        s("222007");
      var i = s("37983"),
        n = s("884691"),
        l = s("77078"),
        a = s("519705"),
        r = s("133403"),
        d = s("679653"),
        o = s("419830"),
        u = s("42203"),
        c = s("245997"),
        h = s("27618"),
        N = s("697218"),
        f = s("145131"),
        g = s("34676"),
        S = s("49111"),
        E = s("782340"),
        m = s("293397");
      class T extends n.PureComponent {
        highlight() {
          this.setState({ highlight: !0 }, () => {
            null != this._timeout && clearTimeout(this._timeout),
              (this._timeout = setTimeout(this.unhighlight, 1e3));
          });
        }
        componentWillUnmount() {
          null != this._timeout && clearTimeout(this._timeout);
        }
        setMessageNotification(e, t, s) {
          let { channel: i } = this.props,
            n = i.getGuildId();
          null != n &&
            a.default.updateChannelOverrideSettings(
              n,
              i.id,
              { message_notifications: e, muted: null != t && t },
              s
            );
        }
        handleRadioChange(e) {
          this.setMessageNotification(
            e,
            void 0,
            g.NotificationLabel.notifications(e)
          );
        }
        renderMessageNotificationsRadioOption(e) {
          let {
              messageNotifications: t,
              guildMuted: s,
              muted: n,
              guildMessageNotifications: a,
              checkboxColor: r,
            } = this.props,
            d = t === e;
          (null == t || t === S.UserNotificationSettings.NULL) &&
            e === a &&
            (d = !0);
          let o = l.Checkbox.Types.INVERTED;
          return (
            (n || t === S.UserNotificationSettings.NULL || null == t) &&
              (o = l.Checkbox.Types.GHOST),
            (0, i.jsx)(l.Checkbox, {
              value: !s && d,
              disabled: s,
              shape: l.Checkbox.Shapes.ROUND,
              color: r,
              type: o,
              onChange: this.handleRadioChange.bind(this, e),
            })
          );
        }
        renderName() {
          let e, t;
          let { channel: s } = this.props;
          null != s.parent_id && (e = u.default.getChannel(s.parent_id));
          let n = (0, o.getChannelIconComponent)(s);
          if (
            s.type === S.ChannelTypes.GUILD_CATEGORY &&
            null != s.guild_id &&
            "" !== s.guild_id
          ) {
            let e = c.default.getCategories(s.guild_id);
            t = E.default.Messages.NUM_CHANNELS.format({
              num: null != e[s.id] ? e[s.id].length : 0,
            });
          } else
            t =
              null != e
                ? E.default.Messages.IN_CATEGORY.format({
                    categoryName: (0, d.computeChannelName)(
                      e,
                      N.default,
                      h.default
                    ),
                  })
                : E.default.Messages.NO_CATEGORY;
          return (0, i.jsxs)(f.default, {
            grow: 1,
            className: m.nameContainer,
            children: [
              null != n ? (0, i.jsx)(n, { className: m.icon }) : null,
              (0, i.jsxs)("div", {
                className: m.channelNameContainer,
                children: [
                  (0, i.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    className: m.channelName,
                    children: (0, d.computeChannelName)(
                      s,
                      N.default,
                      h.default
                    ),
                  }),
                  (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: m.channelNameByline,
                    children: t,
                  }),
                ],
              }),
            ],
          });
        }
        renderOptions() {
          let { muted: e, guildMuted: t } = this.props;
          return (0, i.jsxs)(f.default, {
            grow: 0,
            shrink: 0,
            className: m.checkboxGroup,
            justify: f.default.Justify.AROUND,
            align: f.default.Align.CENTER,
            children: [
              (0, i.jsx)(f.default.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: t ? m.checkboxContainerMuted : m.checkboxContainer,
                children: this.renderMessageNotificationsRadioOption(
                  S.UserNotificationSettings.ALL_MESSAGES
                ),
              }),
              (0, i.jsx)(f.default.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: t ? m.checkboxContainerMuted : m.checkboxContainer,
                children: this.renderMessageNotificationsRadioOption(
                  S.UserNotificationSettings.ONLY_MENTIONS
                ),
              }),
              (0, i.jsx)(f.default.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: t ? m.checkboxContainerMuted : m.checkboxContainer,
                children: this.renderMessageNotificationsRadioOption(
                  S.UserNotificationSettings.NO_MESSAGES
                ),
              }),
              (0, i.jsx)(f.default.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: m.checkboxMute,
                children: (0, i.jsx)(l.Checkbox, {
                  value: e,
                  shape: l.Checkbox.Shapes.BOX,
                  type: l.Checkbox.Types.INVERTED,
                  onChange: this.handleMute,
                }),
              }),
            ],
          });
        }
        render() {
          let { highlight: e } = this.state;
          return (0, i.jsxs)(l.Card, {
            outline: !0,
            editable: !0,
            className: e ? m.overrideHighlight : m.override,
            children: [
              this.renderName(),
              this.renderOptions(),
              (0, i.jsx)(r.default, {
                className: m.removeOverride,
                onClick: this.handleDelete,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { highlight: !1 }),
            (this.unhighlight = () => {
              this.setState({ highlight: !1 });
            }),
            (this.handleMute = (e, t) => {
              let { messageNotifications: s } = this.props;
              this.setMessageNotification(
                null != s ? s : S.UserNotificationSettings.NULL,
                t,
                g.NotificationLabel.muted(t)
              );
            }),
            (this.handleDelete = () => {
              let { onDelete: e, channel: t } = this.props;
              this.setMessageNotification(
                S.UserNotificationSettings.NULL,
                !1,
                g.NotificationLabels.OverrideDeleted
              ),
                null != e && e(t.id);
            });
        }
      }
    },
    319165: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useMutedUntilText: function () {
            return a;
          },
          default: function () {
            return r;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("77078"),
        l = s("782340");
      function a(e) {
        return null == e || null == e.end_time
          ? null
          : l.default.Messages.MUTED_UNTIL_TIME.format({
              endTime: new Date(e.end_time).toLocaleString(
                l.default.getLocale(),
                {
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                }
              ),
            });
      }
      function r(e) {
        let { muteConfig: t, className: s } = e,
          l = a(t);
        return null != l
          ? (0, i.jsx)(n.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: s,
              children: l,
            })
          : null;
      }
    },
    612434: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("77078"),
        l = s("145131"),
        a = s("983100"),
        r = e => {
          let { title: t, subtitle: s, icon: r } = e;
          return (0, i.jsxs)(l.default, {
            className: a.wrapper,
            align: l.default.Align.BASELINE,
            children: [
              null != r &&
                (0, i.jsx)(r, { width: 16, height: 16, className: a.icon }),
              (0, i.jsx)(n.Text, {
                variant: "text-md/normal",
                className: a.title,
                children: t,
              }),
              null != s && "" !== s
                ? (0, i.jsx)(n.Text, {
                    variant: "text-xs/semibold",
                    className: a.subtitle,
                    children: s,
                  })
                : null,
            ],
          });
        };
    },
    660279: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("469563"),
        l = s("524173"),
        a = s("75196"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: n = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, a.default)(r),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                className: l,
                fill: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z",
              }),
            });
          },
          l.BellIcon,
          void 0,
          { size: 24 }
        );
    },
    619911: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("469563"),
        l = s("125094"),
        a = s("75196"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: n = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, a.default)(r),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("path", {
                  d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                  className: l,
                  fill: n,
                }),
                (0, i.jsx)("path", {
                  d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                  className: l,
                  fill: n,
                }),
              ],
            });
          },
          l.ScreenArrowIcon,
          void 0,
          { size: 24 }
        );
    },
    589723: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          BellIcon: function () {
            return a;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("669491"),
        l = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...d
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
            className: r,
          }),
        });
      };
    },
    331008: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CircleInformationIcon: function () {
            return a;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("669491"),
        l = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          secondaryColor: a = "transparent",
          secondaryColorClass: r = "",
          color: d = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof a ? a : a.css,
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              fillRule: "evenodd",
              d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
              clipRule: "evenodd",
              className: o,
            }),
          ],
        });
      };
    },
    583103: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          DenyIcon: function () {
            return a;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("669491"),
        l = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...d
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            fillRule: "evenodd",
            d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=a3a1c675b467cf12b164.js.map
