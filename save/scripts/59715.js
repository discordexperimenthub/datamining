(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59715"],
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
    853297: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f9bc949bccde831027f1.svg";
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
    843962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getChannelIconURL: function () {
            return r;
          },
        }),
        n("222007");
      var s = n("697218"),
        a = n("315102"),
        i = n("449008"),
        l = n("49111");
      function r(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
          n = arguments.length > 2 ? arguments[2] : void 0;
        switch (e.type) {
          case l.ChannelTypes.DM:
            let [r] = e.recipients
              .map(s.default.getUser)
              .filter(i.isNotNullish);
            if (null == r) return null;
            return r.getAvatarURL(void 0, t, n);
          case l.ChannelTypes.GROUP_DM:
            return a.default.getChannelIconURL({
              id: e.id,
              icon: e.icon,
              applicationId: e.getApplicationId(),
              size: t,
            });
        }
      }
    },
    208620: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n("446674"),
        a = n("913144"),
        i = n("49111");
      let l = {};
      class r extends s.default.Store {
        getState(e) {
          return l[e];
        }
      }
      r.displayName = "CodedLinkNativeAppStateStore";
      var u = new r(a.default, {
        NATIVE_APP_MODAL_OPENING: function (e) {
          let { code: t } = e;
          l[t] = i.NativeAppStates.OPENING;
        },
        NATIVE_APP_MODAL_OPENED: function (e) {
          let { code: t } = e;
          l[t] = i.NativeAppStates.OPEN;
        },
        NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
          let { code: t } = e;
          l[t] = i.NativeAppStates.OPEN_FAIL;
        },
      });
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
            return u;
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
      var u = r;
    },
    488284: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("424973");
      var s = n("446674"),
        a = n("193990"),
        i = n("845579"),
        l = n("385649"),
        r = n("599110"),
        u = n("684581"),
        o = n("49111"),
        c = n("782340");
      function d() {
        return (
          m() &&
          u.default.experiment.getCurrentConfig(
            { location: "holiday_events_is_eligible" },
            { autoTrackExposure: !1 }
          ).enabled
        );
      }
      function f() {
        let { enabled: e } = u.default.experiment.useExperiment(
          { location: "holiday_events_use_eligible" },
          { autoTrackExposure: !1 }
        );
        return m() && e;
      }
      function p() {
        return (
          null != u.default.ringtone &&
          null != u.default.getRingtoneSettingsLabel
        );
      }
      function m() {
        let e = Date.now();
        return e >= u.default.startTimeMs && e <= u.default.endTimeMs;
      }
      var g = {
        subscribe: function (e) {
          return u.default.experiment.subscribe(
            { location: "holiday_events_subscribe" },
            e
          );
        },
        isEligible: d,
        isRingtoneDisabled: function () {
          return (
            null == u.default.ringtone ||
            l.default.isSoundDisabled(u.default.ringtone)
          );
        },
        isRingtoneEligible: function () {
          let e = d();
          return e && p();
        },
        onRingtoneSettingValueChange: function (e) {
          let t = l.default.getDisabledSounds();
          if (null == u.default.ringtone) return;
          let n = t.filter(e => e !== u.default.ringtone);
          !e && n.push(u.default.ringtone),
            a.default.setDisabledSounds(n),
            r.default.track(o.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
              toggled_on: e,
              sound_name: u.default.ringtone,
            });
        },
        useIsEligible: f,
        useIsRingtoneDisabled: function () {
          return (0, s.useStateFromStores)(
            [l.default],
            () =>
              null == u.default.ringtone ||
              l.default.isSoundDisabled(u.default.ringtone)
          );
        },
        useIsRingtoneEligible: function () {
          let e = f();
          return e && p();
        },
        useRingtoneSettingDescription: function () {
          let e = i.NativePhoneIntegrationEnabled.useSetting();
          return e ? void 0 : c.default.Messages.ENABLE_PHONE_INTEGRATION;
        },
        useRingtoneSettingValue: function () {
          let e = (0, s.useStateFromStores)([l.default], () =>
              l.default.getDisabledSounds()
            ),
            t = i.NativePhoneIntegrationEnabled.useSetting();
          return (
            null != u.default.ringtone && t && !e.includes(u.default.ringtone)
          );
        },
        getAppSpinnerSources: function () {
          return m() ? u.default.appSpinnerSources : null;
        },
        getLoadingTips: function () {
          var e;
          return m()
            ? null === (e = u.default.getLoadingTips) || void 0 === e
              ? void 0
              : e.call(u.default)
            : null;
        },
      };
    },
    816306: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        i = n("394846"),
        l = n("446674"),
        r = n("77078"),
        u = n("528502"),
        o = n("523086"),
        c = n("208620"),
        d = n("393414"),
        f = n("124969"),
        p = n("49111"),
        m = n("492249"),
        g = n("782340"),
        N = n("580073"),
        x = n("853297");
      l.default.initialize();
      let h = i.isMobile || i.isTablet,
        b = "inventory";
      function T() {
        let e = (0, l.useStateFromStores)([c.default], () =>
          c.default.getState("quests")
        );
        if (
          (a.useEffect(() => {
            !h &&
              (null == e
                ? o.default.openNativeAppModal(
                    "quests",
                    p.RPCCommands.DEEP_LINK,
                    {
                      type: m.RPCDeepLinks.USER_SETTINGS,
                      params: { section: b },
                    }
                  )
                : e === p.NativeAppStates.OPEN_FAIL &&
                  (0, d.replaceWith)(p.Routes.SETTINGS(b)));
          }, [e]),
          h)
        )
          return (0, s.jsxs)("div", {
            className: N.mobileWebContainer,
            children: [
              (0, s.jsx)("img", {
                src: x,
                alt: "",
                className: N.mobileWebImage,
              }),
              (0, s.jsx)(r.Heading, {
                variant: "display-lg",
                color: "text-brand",
                children: g.default.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING,
              }),
              (0, s.jsx)(r.Text, {
                variant: "text-md/normal",
                className: N.mobileWebCopy,
                children:
                  g.default.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY.format(),
              }),
            ],
          });
        let t =
          null == e ||
          e === p.NativeAppStates.OPENING ||
          e === p.NativeAppStates.OPEN_FAIL;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(u.default, {
              className: N.backgroundArtwork,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, s.jsx)("div", {
              className: N.container,
              children: (0, s.jsx)(f.default, {
                children: t
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(f.Title, {
                          children: g.default.Messages.APP_OPENING,
                        }),
                        (0, s.jsx)(f.AuthSpinner, {}),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(f.Title, {
                          className: N.appOpenedTitle,
                          children: g.default.Messages.APP_OPENED_TITLE,
                        }),
                        (0, s.jsx)(f.SubTitle, {
                          children:
                            g.default.Messages.DEEPLINK_BROWSER_APP_OPENED,
                        }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
    },
    124969: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Title: function () {
            return b;
          },
          SubTitle: function () {
            return T;
          },
          Image: function () {
            return Image;
          },
          Button: function () {
            return v;
          },
          Avatar: function () {
            return E;
          },
          GuildIcon: function () {
            return S;
          },
          ChannelIcon: function () {
            return _;
          },
          Input: function () {
            return I;
          },
          Block: function () {
            return A;
          },
          SubText: function () {
            return j;
          },
          AuthSpinner: function () {
            return R;
          },
          ActivityCount: function () {
            return L;
          },
          JoiningAs: function () {
            return O;
          },
          IncompatibleBrowser: function () {
            return P;
          },
          default: function () {
            return D;
          },
        }),
        n("834022");
      var s = n("37983");
      n("884691");
      var a = n("414456"),
        i = n.n(a),
        l = n("77078"),
        r = n("843962"),
        u = n("145131"),
        o = n("476263"),
        c = n("476765"),
        d = n("637888"),
        f = n("98013"),
        p = n("701909"),
        m = n("439932"),
        g = n("49111"),
        N = n("782340"),
        x = n("2710");
      let h = l.Avatar;
      null == h && (h = () => null);
      let b = e => {
          let { className: t, id: n, children: a } = e;
          return (0, s.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: i(x.title, t),
            id: n,
            children: a,
          });
        },
        T = e => {
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
            className: i(x.image, t),
          });
        },
        v = e => {
          let { className: t, ...n } = e,
            a = n.look === l.Button.Looks.LINK;
          return (0, s.jsx)(l.Button, {
            size: a ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
            fullWidth: !a,
            className: i(t, { [x.button]: !a, [x.linkButton]: a }),
            ...n,
          });
        };
      (v.Looks = l.Button.Looks),
        (v.Colors = l.Button.Colors),
        (v.Sizes = l.Button.Sizes);
      let E = e => {
          let { className: t, src: n, size: a } = e;
          return (0, s.jsx)(h, {
            src: n,
            size: a,
            className: i(x.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        S = e => {
          let { guild: t, size: n, animate: a = !1, className: i } = e;
          return (0, s.jsx)(o.default, {
            active: !0,
            guild: t,
            size: n,
            animate: a,
            className: i,
          });
        };
      S.Sizes = o.default.Sizes;
      let _ = e => {
        let { className: t, channel: n, size: a } = e;
        return (0, s.jsx)(h, {
          src: (0, r.getChannelIconURL)(n),
          size: a,
          className: i(x.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      _.Sizes = l.AvatarSizes;
      let I = e => {
          let {
              label: t,
              error: n,
              placeholder: a,
              value: r,
              className: u,
              inputClassName: o,
              setRef: d,
              type: f = "text",
              onChange: p,
              autoComplete: m,
              autoFocus: g,
              maxLength: N,
              spellCheck: h,
              name: b,
              description: T,
              required: v,
              onFocus: E,
              onBlur: S,
            } = e,
            _ = (0, c.useUID)();
          return (0, s.jsxs)(l.FormItem, {
            title: t,
            error: n,
            className: u,
            required: v,
            tag: "label",
            htmlFor: _,
            children: [
              (0, s.jsx)(l.TextInput, {
                name: b,
                type: f,
                value: r,
                inputRef: d,
                placeholder: a,
                inputClassName: i(o, { [x.inputError]: null != n }),
                "aria-label": t,
                onChange: p,
                autoComplete: m,
                autoFocus: g,
                maxLength: N,
                spellCheck: h,
                id: _,
                onFocus: E,
                onBlur: S,
              }),
              null != T
                ? (0, s.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    className: x.description,
                    children: T,
                  })
                : null,
            ],
          });
        },
        A = e => {
          let { className: t, children: n } = e;
          return (0, s.jsx)("div", { className: i(x.block, t), children: n });
        },
        j = e => {
          let { className: t, children: n, isProminent: a } = e;
          return (0, s.jsx)(l.Text, {
            variant: a ? "text-sm/normal" : "text-xs/normal",
            className: i(x.subText, t),
            children: n,
          });
        },
        R = e => {
          let { className: t } = e;
          return (0, s.jsx)(u.default, {
            direction: u.default.Direction.VERTICAL,
            align: u.default.Align.CENTER,
            className: t,
            children: (0, s.jsx)(d.default, { className: x.spinnerVideo }),
          });
        },
        L = e => {
          let t,
            {
              online: n,
              total: a,
              className: r,
              flat: o,
              textClassName: c,
            } = e;
          return null == a
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, s.jsxs)("div", {
                  className: i(x.pill, x.pillOnline, o && x.pillFlat),
                  children: [
                    (0, s.jsx)("i", { className: x.pillIconOnline }),
                    (0, s.jsx)(l.Text, {
                      tag: "span",
                      className: i(x.pillMessage, c),
                      variant: "text-sm/normal",
                      children:
                        N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                          { membersOnline: n }
                        ),
                    }),
                  ],
                })),
              (0, s.jsxs)(u.default, {
                justify: u.default.Justify.CENTER,
                className: r,
                children: [
                  t,
                  (0, s.jsxs)("div", {
                    className: i(x.pill, o && x.pillFlat),
                    children: [
                      (0, s.jsx)("i", { className: x.pillIconTotal }),
                      (0, s.jsx)(l.Text, {
                        tag: "span",
                        className: i(x.pillMessage, c),
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
        O = e => {
          let { user: t } = e;
          return null == t
            ? null
            : (0, s.jsxs)("div", {
                className: x.joiningAs,
                children: [
                  (0, s.jsx)(l.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      N.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, s.jsx)(E, {
                    className: x.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: l.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, s.jsx)(l.Text, {
                    className: x.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username,
                  }),
                ],
              });
        },
        P = e => {
          let { className: t } = e;
          return (0, s.jsxs)(A, {
            className: t,
            children: [
              (0, s.jsx)(v, {
                onClick: () =>
                  window.open((0, f.getCurrentPlatformDownloadURL)()),
                children:
                  N.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                    platform: (0, f.getPlatformReadableName)(),
                  }),
              }),
              (0, s.jsx)(j, {
                className: x.downloadButtonSubtext,
                children: N.default.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: p.default.getArticleURL(
                    g.HelpdeskArticles.SUPPORTED_BROWSERS
                  ),
                }),
              }),
            ],
          });
        };
      var D = e => {
        let {
          className: t,
          contentClassName: n,
          tag: a = "section",
          onSubmit: l,
          children: r,
          expanded: u = !1,
          theme: o = g.ThemeTypes.DARK,
          style: c,
        } = e;
        return (0, s.jsxs)(a, {
          "data-theme": o,
          onSubmit: l,
          style: c,
          className: i(
            u ? x.authBoxExpanded : x.authBox,
            (0, m.getThemeClass)(o),
            t
          ),
          children: [
            (0, s.jsx)("div", { className: x.discordLogo }),
            (0, s.jsx)("div", {
              className: i(x.centeringWrapper, n),
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
            return S;
          },
        }),
        n("843762");
      var s = n("37983"),
        a = n("884691"),
        i = n("819855"),
        l = n("77078"),
        r = n("488284"),
        u = n("560528"),
        o = n("242777"),
        c = n("336406"),
        d = n("58608"),
        f = n("49111"),
        p = n("838623"),
        m = n("844389"),
        g = n("392518"),
        N = n("414298"),
        x = n("815143"),
        h = n("134072");
      function b(e) {
        let {
            movDark: t = o,
            movLight: n = c,
            mp4Dark: a = p,
            mp4Light: i = N,
            pngDark: l = m,
            pngLight: r = x,
            webmDark: d = g,
            webmLight: b = h,
          } = e,
          T = (0, u.getChromeVersion)(),
          v = [
            (0, s.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: l }, "png"),
          ],
          E = [
            (0, s.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: r }, "png"),
          ];
        return (
          (T > 52 || -1 === T) &&
            (v.unshift(
              (0, s.jsx)("source", { src: d, type: "video/webm" }, "webm")
            ),
            E.unshift(
              (0, s.jsx)("source", { src: b, type: "video/webm" }, "webm")
            )),
          (0, u.supportsHEVCAlpha)() &&
            (v.unshift(
              (0, s.jsx)("source", { src: t, type: "video/mp4" }, "hevc")
            ),
            E.unshift(
              (0, s.jsx)("source", { src: n, type: "video/mp4" }, "hevc")
            )),
          { [f.ThemeTypes.DARK]: v, [f.ThemeTypes.LIGHT]: E }
        );
      }
      let T = r.default.getAppSpinnerSources(),
        v = null != T ? b(T) : null,
        E = b({});
      var S = e => {
        var t;
        let {
            loop: n = !0,
            autoPlay: r = !0,
            setRef: u,
            className: o,
            onReady: c,
          } = e,
          { theme: p } = (0, l.useThemeContext)(),
          { reducedMotion: m } = a.useContext(
            l.AccessibilityPreferencesContext
          ),
          g = E;
        null != v && (g = v);
        let N = (0, i.isThemeDark)(p) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT,
          x = null !== (t = g[N]) && void 0 !== t ? t : g[f.ThemeTypes.DARK];
        return (0, s.jsx)(
          d.default,
          {
            ref: u,
            onLoadedData: c,
            className: o,
            loop: !m.enabled && n,
            autoPlay: !m.enabled && r,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: x,
          },
          p
        );
      };
    },
  },
]);
//# sourceMappingURL=91f70172d12e3d8fecbd.js.map
