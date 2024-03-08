(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18036"],
  {
    378913: function (e, t, n) {
      "use strict";
      e.exports = n.p + "906a38cbd45d6780304c.svg";
    },
    32209: function (e, t, n) {
      "use strict";
      e.exports = n.p + "22b6ded15e9c553447ea.webm";
    },
    381471: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d2e50ba9152e262f3633.webm";
    },
    242777: function (e, t, n) {
      "use strict";
      e.exports = n.p + "27316f256e0a1fb24421.mov";
    },
    838623: function (e, t, n) {
      "use strict";
      e.exports = n.p + "9492f371ccf5db4f0156.mp4";
    },
    844389: function (e, t, n) {
      "use strict";
      e.exports = n.p + "35b6e69b80885d349202.png";
    },
    392518: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b85e9e5e26daee13304b.webm";
    },
    336406: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0375f4834ae07b9d5de9.mov";
    },
    414298: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b9b0ab98fd3fcb65f4d5.mp4";
    },
    815143: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b7fb33c633b7ad9732e5.png";
    },
    134072: function (e, t, n) {
      "use strict";
      e.exports = n.p + "988b1594e4843a08ef39.webm";
    },
    193990: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("913144"),
        a = {
          setDesktopType(e) {
            s.default.dispatch({
              type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
              desktopType: e,
            });
          },
          setTTSType(e) {
            s.default.dispatch({
              type: "NOTIFICATIONS_SET_TTS_TYPE",
              ttsType: e,
            });
          },
          setDisabledSounds(e) {
            s.default.dispatch({
              type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
              sounds: e,
            });
          },
          toggleDisableAllSounds() {
            s.default.dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
          },
          setDisableUnreadBadge(e) {
            s.default.dispatch({
              type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
              disableUnreadBadge: e,
            });
          },
          setTaskbarFlash(e) {
            s.default.dispatch({
              type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
              taskbarFlash: e,
            });
          },
          setNotifyMessagesInSelectedChannel(e) {
            s.default.dispatch({
              type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
              notify: e,
            });
          },
          setPermissionsState(e, t) {
            s.default.dispatch({
              type: "NOTIFICATIONS_SET_PERMISSION_STATE",
              enabled: e,
              source: t,
            });
          },
          showNotification(e, t, n, a) {
            let i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {};
            s.default.dispatch({
              type: "NOTIFICATION_CREATE",
              icon: e,
              title: t,
              body: n,
              trackingProps: a,
              options: {
                ...i,
                onClick() {
                  var e;
                  null === (e = i.onClick) || void 0 === e || e.call(i),
                    s.default.dispatch({ type: "NOTIFICATION_CLICK" });
                },
              },
            });
          },
          clickedNotification() {
            s.default.dispatch({ type: "NOTIFICATION_CLICK" });
          },
        };
    },
    843456: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("414456"),
        i = n.n(a),
        l = n("77078"),
        r = n("476765"),
        o = n("124969"),
        u = n("800932"),
        d = n("434824"),
        c = n("782340"),
        f = n("419402");
      function p(e) {
        let { transitionState: t, onClose: n, guildTemplate: a } = e,
          { form: p, preview: T, handleSubmit: S } = (0, u.default)(a, !1),
          N = (0, r.useUID)();
        return (0, s.jsx)("div", {
          children: (0, s.jsxs)(l.ModalRoot, {
            size: l.ModalSize.DYNAMIC,
            transitionState: t,
            className: i(f.modalRoot),
            "aria-labelledby": N,
            children: [
              (0, s.jsxs)("div", {
                className: f.modalContainer,
                children: [
                  (0, s.jsx)("div", {
                    className: i(f.modalSection, f.ctaSection),
                    children: (0, s.jsx)("div", {
                      className: f.ctaContainer,
                      children: (0, s.jsx)(d.default, {
                        guildTemplate: a,
                        headerId: N,
                      }),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: i(f.modalSection, f.formSection),
                    children: (0, s.jsxs)(l.Scroller, {
                      className: f.formContainer,
                      children: [
                        (0, s.jsx)(o.Title, {
                          className: f.header,
                          children:
                            c.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD,
                        }),
                        p,
                        T,
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(l.ModalFooter, {
                className: f.modalFooter,
                children: [
                  (0, s.jsx)(l.Button, {
                    color: l.Button.Colors.PRIMARY,
                    onClick: n,
                    children: c.default.Messages.CLOSE,
                  }),
                  (0, s.jsx)(l.Button, {
                    color: l.Button.Colors.GREEN,
                    onClick: async () => {
                      let e = await S();
                      null != e && n();
                    },
                    children: c.default.Messages.CREATE,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    94927: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("862205");
      let a = (0, s.createExperiment)({
        kind: "user",
        id: "2023-12_2023_eoy_ringtone",
        label: "EOY Ringtone 2023",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      var i = a;
    },
    684581: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var s = n("94927"),
        a = n("782340"),
        i = n("32209"),
        l = n("381471");
      let r = {
        experiment: s.default,
        startTimeMs: 17025768e5,
        endTimeMs: 17042184e5,
        isDesktopOnly: !0,
        ringtone: "call_ringing_snowsgiving",
        getRingtoneSettingsLabel: () =>
          a.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️",
        appSpinnerSources: { webmDark: i, webmLight: l },
        getLoadingTips: () => [],
      };
      var o = r;
    },
    488284: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("424973");
      var s = n("446674"),
        a = n("193990"),
        i = n("845579"),
        l = n("385649"),
        r = n("599110"),
        o = n("684581"),
        u = n("49111"),
        d = n("782340");
      function c() {
        return (
          T() &&
          o.default.experiment.getCurrentConfig(
            { location: "holiday_events_is_eligible" },
            { autoTrackExposure: !1 }
          ).enabled
        );
      }
      function f() {
        let { enabled: e } = o.default.experiment.useExperiment(
          { location: "holiday_events_use_eligible" },
          { autoTrackExposure: !1 }
        );
        return T() && e;
      }
      function p() {
        return (
          null != o.default.ringtone &&
          null != o.default.getRingtoneSettingsLabel
        );
      }
      function T() {
        let e = Date.now();
        return e >= o.default.startTimeMs && e <= o.default.endTimeMs;
      }
      var S = {
        subscribe: function (e) {
          return o.default.experiment.subscribe(
            { location: "holiday_events_subscribe" },
            e
          );
        },
        isEligible: c,
        isRingtoneDisabled: function () {
          return (
            null == o.default.ringtone ||
            l.default.isSoundDisabled(o.default.ringtone)
          );
        },
        isRingtoneEligible: function () {
          let e = c();
          return e && p();
        },
        onRingtoneSettingValueChange: function (e) {
          let t = l.default.getDisabledSounds();
          if (null == o.default.ringtone) return;
          let n = t.filter(e => e !== o.default.ringtone);
          !e && n.push(o.default.ringtone),
            a.default.setDisabledSounds(n),
            r.default.track(u.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
              toggled_on: e,
              sound_name: o.default.ringtone,
            });
        },
        useIsEligible: f,
        useIsRingtoneDisabled: function () {
          return (0, s.useStateFromStores)(
            [l.default],
            () =>
              null == o.default.ringtone ||
              l.default.isSoundDisabled(o.default.ringtone)
          );
        },
        useIsRingtoneEligible: function () {
          let e = f();
          return e && p();
        },
        useRingtoneSettingDescription: function () {
          let e = i.NativePhoneIntegrationEnabled.useSetting();
          return e ? void 0 : d.default.Messages.ENABLE_PHONE_INTEGRATION;
        },
        useRingtoneSettingValue: function () {
          let e = (0, s.useStateFromStores)([l.default], () =>
              l.default.getDisabledSounds()
            ),
            t = i.NativePhoneIntegrationEnabled.useSetting();
          return (
            null != o.default.ringtone && t && !e.includes(o.default.ringtone)
          );
        },
        getAppSpinnerSources: function () {
          return T() ? o.default.appSpinnerSources : null;
        },
        getLoadingTips: function () {
          var e;
          return T()
            ? null === (e = o.default.getLoadingTips) || void 0 === e
              ? void 0
              : e.call(o.default)
            : null;
        },
      };
    },
    385649: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var s = n("446674"),
        a = n("913144"),
        i = n("599110"),
        l = n("773336"),
        r = n("49111");
      let o = {
          desktopType: l.isPlatformEmbedded
            ? r.DesktopNotificationTypes.ALL
            : r.DesktopNotificationTypes.NEVER,
          disableAllSounds: !1,
          disabledSounds: [],
          ttsType: r.TTSNotificationTypes.NEVER,
          disableUnreadBadge: !1,
          taskbarFlash: !0,
          notifyMessagesInSelectedChannel: !1,
        },
        u = o;
      function d(e, t) {
        !__OVERLAY__ && i.default.track(e, t);
      }
      function c(e) {
        let { desktopType: t } = e;
        (u.desktopType = t),
          d(r.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
            notifications_enabled: t === r.DesktopNotificationTypes.ALL,
          });
      }
      class f extends s.default.DeviceSettingsStore {
        initialize(e) {
          u = { ...o, ...e };
        }
        getUserAgnosticState() {
          return u;
        }
        getDesktopType() {
          return u.desktopType;
        }
        getTTSType() {
          return u.ttsType;
        }
        getDisabledSounds() {
          return u.disabledSounds;
        }
        getDisableAllSounds() {
          return u.disableAllSounds;
        }
        getDisableUnreadBadge() {
          return u.disableUnreadBadge;
        }
        getNotifyMessagesInSelectedChannel() {
          return u.notifyMessagesInSelectedChannel;
        }
        get taskbarFlash() {
          return u.taskbarFlash;
        }
        isSoundDisabled(e) {
          return u.disableAllSounds || -1 !== u.disabledSounds.indexOf(e);
        }
      }
      (f.displayName = "NotificationSettingsStore"),
        (f.persistKey = "notifications"),
        (f.migrations = [
          e => {
            let t = { ...e };
            return (
              (t.disabledSounds = t.disabledSounds || []),
              (t.disableUnreadBadge = t.disableUnreadBadge || !1),
              (t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash),
              (t.ttsType = t.ttsType || r.TTSNotificationTypes.NEVER),
              null == t.desktopType &&
                (t.desktopType = l.isPlatformEmbedded
                  ? r.DesktopNotificationTypes.ALL
                  : r.DesktopNotificationTypes.NEVER),
              t
            );
          },
        ]);
      var p = new f(a.default, {
        NOTIFICATIONS_SET_DESKTOP_TYPE: c,
        NOTIFICATIONS_SET_TTS_TYPE: function (e) {
          let { ttsType: t } = e;
          u.ttsType = t;
        },
        NOTIFICATIONS_SET_DISABLED_SOUNDS: function (e) {
          let { sounds: t } = e;
          u.disabledSounds = t;
        },
        NOTIFICATIONS_TOGGLE_ALL_DISABLED: function () {
          u.disableAllSounds = !u.disableAllSounds;
        },
        NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
          let { enabled: t, source: n } = e;
          d(r.AnalyticEvents.ENABLE_NOTIFICATIONS, {
            enabled: t === r.NotificationPermissionTypes.ENABLED,
            source: n,
          }),
            t === r.NotificationPermissionTypes.BLOCKED
              ? c({ desktopType: r.DesktopNotificationTypes.NEVER })
              : t === r.NotificationPermissionTypes.ENABLED &&
                c({ desktopType: r.DesktopNotificationTypes.ALL });
        },
        NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function (e) {
          let { disableUnreadBadge: t } = e;
          u.disableUnreadBadge = t;
        },
        NOTIFICATIONS_SET_TASKBAR_FLASH: function (e) {
          let { taskbarFlash: t } = e;
          u.taskbarFlash = t;
        },
        NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function (e) {
          let { notify: t } = e;
          u.notifyMessagesInSelectedChannel = t;
        },
      });
    },
    124969: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Title: function () {
            return I;
          },
          SubTitle: function () {
            return E;
          },
          Image: function () {
            return Image;
          },
          Button: function () {
            return _;
          },
          Avatar: function () {
            return b;
          },
          GuildIcon: function () {
            return h;
          },
          ChannelIcon: function () {
            return A;
          },
          Input: function () {
            return x;
          },
          Block: function () {
            return y;
          },
          SubText: function () {
            return O;
          },
          AuthSpinner: function () {
            return C;
          },
          ActivityCount: function () {
            return v;
          },
          JoiningAs: function () {
            return D;
          },
          IncompatibleBrowser: function () {
            return L;
          },
          default: function () {
            return R;
          },
        }),
        n("834022");
      var s = n("37983");
      n("884691");
      var a = n("414456"),
        i = n.n(a),
        l = n("77078"),
        r = n("843962"),
        o = n("145131"),
        u = n("476263"),
        d = n("476765"),
        c = n("637888"),
        f = n("98013"),
        p = n("701909"),
        T = n("439932"),
        S = n("49111"),
        N = n("782340"),
        m = n("2710");
      let g = l.Avatar;
      null == g && (g = () => null);
      let I = e => {
          let { className: t, id: n, children: a } = e;
          return (0, s.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: i(m.title, t),
            id: n,
            children: a,
          });
        },
        E = e => {
          let { className: t, children: n } = e;
          return (0, s.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: n,
          });
        },
        Image = e => {
          let { className: t, src: n } = e;
          return (0, s.jsx)("img", {
            alt: "",
            src: n,
            className: i(m.image, t),
          });
        },
        _ = e => {
          let { className: t, ...n } = e,
            a = n.look === l.Button.Looks.LINK;
          return (0, s.jsx)(l.Button, {
            size: a ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
            fullWidth: !a,
            className: i(t, { [m.button]: !a, [m.linkButton]: a }),
            ...n,
          });
        };
      (_.Looks = l.Button.Looks),
        (_.Colors = l.Button.Colors),
        (_.Sizes = l.Button.Sizes);
      let b = e => {
          let { className: t, src: n, size: a } = e;
          return (0, s.jsx)(g, {
            src: n,
            size: a,
            className: i(m.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        h = e => {
          let { guild: t, size: n, animate: a = !1, className: i } = e;
          return (0, s.jsx)(u.default, {
            active: !0,
            guild: t,
            size: n,
            animate: a,
            className: i,
          });
        };
      h.Sizes = u.default.Sizes;
      let A = e => {
        let { className: t, channel: n, size: a } = e;
        return (0, s.jsx)(g, {
          src: (0, r.getChannelIconURL)(n),
          size: a,
          className: i(m.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      A.Sizes = l.AvatarSizes;
      let x = e => {
          let {
              label: t,
              error: n,
              placeholder: a,
              value: r,
              className: o,
              inputClassName: u,
              setRef: c,
              type: f = "text",
              onChange: p,
              autoComplete: T,
              autoFocus: S,
              maxLength: N,
              spellCheck: g,
              name: I,
              description: E,
              required: _,
              onFocus: b,
              onBlur: h,
            } = e,
            A = (0, d.useUID)();
          return (0, s.jsxs)(l.FormItem, {
            title: t,
            error: n,
            className: o,
            required: _,
            tag: "label",
            htmlFor: A,
            children: [
              (0, s.jsx)(l.TextInput, {
                name: I,
                type: f,
                value: r,
                inputRef: c,
                placeholder: a,
                inputClassName: i(u, { [m.inputError]: null != n }),
                "aria-label": t,
                onChange: p,
                autoComplete: T,
                autoFocus: S,
                maxLength: N,
                spellCheck: g,
                id: A,
                onFocus: b,
                onBlur: h,
              }),
              null != E
                ? (0, s.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    className: m.description,
                    children: E,
                  })
                : null,
            ],
          });
        },
        y = e => {
          let { className: t, children: n } = e;
          return (0, s.jsx)("div", { className: i(m.block, t), children: n });
        },
        O = e => {
          let { className: t, children: n, isProminent: a } = e;
          return (0, s.jsx)(l.Text, {
            variant: a ? "text-sm/normal" : "text-xs/normal",
            className: i(m.subText, t),
            children: n,
          });
        },
        C = e => {
          let { className: t } = e;
          return (0, s.jsx)(o.default, {
            direction: o.default.Direction.VERTICAL,
            align: o.default.Align.CENTER,
            className: t,
            children: (0, s.jsx)(c.default, { className: m.spinnerVideo }),
          });
        },
        v = e => {
          let t,
            {
              online: n,
              total: a,
              className: r,
              flat: u,
              textClassName: d,
            } = e;
          return null == a
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, s.jsxs)("div", {
                  className: i(m.pill, m.pillOnline, u && m.pillFlat),
                  children: [
                    (0, s.jsx)("i", { className: m.pillIconOnline }),
                    (0, s.jsx)(l.Text, {
                      tag: "span",
                      className: i(m.pillMessage, d),
                      variant: "text-sm/normal",
                      children:
                        N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                          { membersOnline: n }
                        ),
                    }),
                  ],
                })),
              (0, s.jsxs)(o.default, {
                justify: o.default.Justify.CENTER,
                className: r,
                children: [
                  t,
                  (0, s.jsxs)("div", {
                    className: i(m.pill, u && m.pillFlat),
                    children: [
                      (0, s.jsx)("i", { className: m.pillIconTotal }),
                      (0, s.jsx)(l.Text, {
                        tag: "span",
                        className: i(m.pillMessage, d),
                        variant: "text-sm/normal",
                        children:
                          N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: a }
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        D = e => {
          let { user: t } = e;
          return null == t
            ? null
            : (0, s.jsxs)("div", {
                className: m.joiningAs,
                children: [
                  (0, s.jsx)(l.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      N.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, s.jsx)(b, {
                    className: m.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: l.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, s.jsx)(l.Text, {
                    className: m.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username,
                  }),
                ],
              });
        },
        L = e => {
          let { className: t } = e;
          return (0, s.jsxs)(y, {
            className: t,
            children: [
              (0, s.jsx)(_, {
                onClick: () =>
                  window.open((0, f.getCurrentPlatformDownloadURL)()),
                children:
                  N.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                    platform: (0, f.getPlatformReadableName)(),
                  }),
              }),
              (0, s.jsx)(O, {
                className: m.downloadButtonSubtext,
                children: N.default.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: p.default.getArticleURL(
                    S.HelpdeskArticles.SUPPORTED_BROWSERS
                  ),
                }),
              }),
            ],
          });
        };
      var R = e => {
        let {
          className: t,
          contentClassName: n,
          tag: a = "section",
          onSubmit: l,
          children: r,
          expanded: o = !1,
          theme: u = S.ThemeTypes.DARK,
          style: d,
        } = e;
        return (0, s.jsxs)(a, {
          "data-theme": u,
          onSubmit: l,
          style: d,
          className: i(
            o ? m.authBoxExpanded : m.authBox,
            (0, T.getThemeClass)(u),
            t
          ),
          children: [
            (0, s.jsx)("div", { className: m.discordLogo }),
            (0, s.jsx)("div", {
              className: i(m.centeringWrapper, n),
              children: r,
            }),
          ],
        });
      };
    },
    637888: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("843762");
      var s = n("37983"),
        a = n("884691"),
        i = n("819855"),
        l = n("77078"),
        r = n("488284"),
        o = n("560528"),
        u = n("242777"),
        d = n("336406"),
        c = n("58608"),
        f = n("49111"),
        p = n("838623"),
        T = n("844389"),
        S = n("392518"),
        N = n("414298"),
        m = n("815143"),
        g = n("134072");
      function I(e) {
        let {
            movDark: t = u,
            movLight: n = d,
            mp4Dark: a = p,
            mp4Light: i = N,
            pngDark: l = T,
            pngLight: r = m,
            webmDark: c = S,
            webmLight: I = g,
          } = e,
          E = (0, o.getChromeVersion)(),
          _ = [
            (0, s.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: l }, "png"),
          ],
          b = [
            (0, s.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: r }, "png"),
          ];
        return (
          (E > 52 || -1 === E) &&
            (_.unshift(
              (0, s.jsx)("source", { src: c, type: "video/webm" }, "webm")
            ),
            b.unshift(
              (0, s.jsx)("source", { src: I, type: "video/webm" }, "webm")
            )),
          (0, o.supportsHEVCAlpha)() &&
            (_.unshift(
              (0, s.jsx)("source", { src: t, type: "video/mp4" }, "hevc")
            ),
            b.unshift(
              (0, s.jsx)("source", { src: n, type: "video/mp4" }, "hevc")
            )),
          { [f.ThemeTypes.DARK]: _, [f.ThemeTypes.LIGHT]: b }
        );
      }
      let E = r.default.getAppSpinnerSources(),
        _ = null != E ? I(E) : null,
        b = I({});
      var h = e => {
        var t;
        let {
            loop: n = !0,
            autoPlay: r = !0,
            setRef: o,
            className: u,
            onReady: d,
          } = e,
          { theme: p } = (0, l.useThemeContext)(),
          { reducedMotion: T } = a.useContext(
            l.AccessibilityPreferencesContext
          ),
          S = b;
        null != _ && (S = _);
        let N = (0, i.isThemeDark)(p) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT,
          m = null !== (t = S[N]) && void 0 !== t ? t : S[f.ThemeTypes.DARK];
        return (0, s.jsx)(
          c.default,
          {
            ref: o,
            onLoadedData: d,
            className: u,
            loop: !T.enabled && n,
            autoPlay: !T.enabled && r,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: m,
          },
          p
        );
      };
    },
  },
]);
//# sourceMappingURL=79be65efece12cd8374c.js.map
