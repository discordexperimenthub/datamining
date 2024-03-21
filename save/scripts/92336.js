(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92336"],
  {
    408854: function (e, t, n) {
      "use strict";
      e.exports = n.p + "88f099e036a0d7620597.png";
    },
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
    143416: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var s,
        a = n("37983"),
        i = n("884691"),
        r = n("730290"),
        l = n("446674"),
        u = n("872717"),
        o = n("43982"),
        d = n("393414"),
        c = n("271938"),
        f = n("145131"),
        p = n("124969"),
        m = n("49111"),
        g = n("782340"),
        h = n("973615"),
        x = n("890957");
      l.default.initialize();
      let N = { HANDOFF: "handoff", DONE: "done", FAILED: "failed" };
      function T() {
        try {
          window.close();
        } catch (e) {}
      }
      s = class extends i.PureComponent {
        componentDidMount() {
          let { stage: e, key: t } = this.state;
          e === N.DONE
            ? T()
            : c.default.isAuthenticated()
              ? u.HTTP.post({
                  url: m.Endpoints.HANDOFF,
                  body: { key: t },
                  oldFormErrors: !0,
                }).then(
                  e => this.handoff(e.body.handoff_token),
                  () => this.handoff()
                )
              : this.handoff();
        }
        handoff(e) {
          o.default
            .requestRedirect(m.RPCCommands.BROWSER_HANDOFF, {
              handoffToken: e,
              fingerprint: c.default.getFingerprint(),
            })
            .then(this.done, this.failed);
        }
        renderDone() {
          return (0, a.jsxs)(p.default, {
            children: [
              (0, a.jsx)(p.Image, {
                src: n("203472"),
                className: x.marginBottom20,
              }),
              (0, a.jsx)(p.Title, {
                className: x.marginBottom8,
                children: g.default.Messages.BROWSER_HANDOFF_DONE_TITLE,
              }),
              (0, a.jsx)(p.SubTitle, {
                className: x.marginBottom40,
                children: g.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE,
              }),
              (0, a.jsx)(p.Button, {
                onClick: this.handleOpenApp,
                children: g.default.Messages.CONTINUE_TO_WEBAPP,
              }),
            ],
          });
        }
        renderFailed() {
          return (0, a.jsxs)(p.default, {
            children: [
              (0, a.jsx)(p.Image, {
                src: n("203472"),
                className: x.marginBottom20,
              }),
              (0, a.jsx)(p.Title, {
                className: x.marginBottom8,
                children: g.default.Messages.BROWSER_HANDOFF_FAILED_TITLE,
              }),
              (0, a.jsx)(p.SubTitle, {
                className: x.marginBottom40,
                children: g.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE,
              }),
              (0, a.jsx)(p.Button, {
                onClick: this.handleOpenApp,
                children: g.default.Messages.CONTINUE_TO_WEBAPP,
              }),
            ],
          });
        }
        renderHandoff() {
          return (0, a.jsxs)(p.default, {
            children: [
              (0, a.jsx)(p.AuthSpinner, {}),
              (0, a.jsx)(p.Title, {
                className: x.marginBottom8,
                children:
                  g.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE,
              }),
              (0, a.jsx)(p.SubTitle, {
                children:
                  g.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION,
              }),
            ],
          });
        }
        render() {
          let e;
          let { stage: t } = this.state;
          switch (t) {
            case N.DONE:
              e = this.renderDone();
              break;
            case N.FAILED:
              e = this.renderFailed();
              break;
            case N.HANDOFF:
            default:
              e = this.renderHandoff();
          }
          return (0, a.jsx)(f.default, {
            justify: f.default.Justify.CENTER,
            align: f.default.Align.CENTER,
            className: h.wrapper,
            children: e,
          });
        }
        constructor(e) {
          var t;
          super(e),
            (this.done = () => {
              T(), this.setState({ stage: N.DONE });
            }),
            (this.failed = () => {
              this.setState({ stage: N.FAILED }), T();
            }),
            (this.handleOpenApp = () => {
              (0, d.transitionTo)(m.Routes.ME);
            });
          let { search: n } = e.location,
            s = null != n && "" !== n ? (0, r.parse)(n) : {};
          this.state = {
            key: null !== (t = s.key) && void 0 !== t ? t : "",
            stage: "true" === s.done ? N.DONE : N.HANDOFF,
          };
        }
      };
    },
    843962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getChannelIconURL: function () {
            return l;
          },
        }),
        n("222007");
      var s = n("697218"),
        a = n("315102"),
        i = n("449008"),
        r = n("49111");
      function l(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
          n = arguments.length > 2 ? arguments[2] : void 0;
        switch (e.type) {
          case r.ChannelTypes.DM:
            let [l] = e.recipients
              .map(s.default.getUser)
              .filter(i.isNotNullish);
            if (null == l) return null;
            return l.getAvatarURL(void 0, t, n);
          case r.ChannelTypes.GROUP_DM:
            return a.default.getChannelIconURL({
              id: e.id,
              icon: e.icon,
              applicationId: e.getApplicationId(),
              size: t,
            });
        }
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
            return u;
          },
        });
      var s = n("94927"),
        a = n("782340"),
        i = n("32209"),
        r = n("381471");
      let l = {
        experiment: s.default,
        startTimeMs: 17025768e5,
        endTimeMs: 17042184e5,
        isDesktopOnly: !0,
        ringtone: "call_ringing_snowsgiving",
        getRingtoneSettingsLabel: () =>
          a.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️",
        appSpinnerSources: { webmDark: i, webmLight: r },
        getLoadingTips: () => [],
      };
      var u = l;
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
        r = n("385649"),
        l = n("599110"),
        u = n("684581"),
        o = n("49111"),
        d = n("782340");
      function c() {
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
        isEligible: c,
        isRingtoneDisabled: function () {
          return (
            null == u.default.ringtone ||
            r.default.isSoundDisabled(u.default.ringtone)
          );
        },
        isRingtoneEligible: function () {
          let e = c();
          return e && p();
        },
        onRingtoneSettingValueChange: function (e) {
          let t = r.default.getDisabledSounds();
          if (null == u.default.ringtone) return;
          let n = t.filter(e => e !== u.default.ringtone);
          !e && n.push(u.default.ringtone),
            a.default.setDisabledSounds(n),
            l.default.track(o.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
              toggled_on: e,
              sound_name: u.default.ringtone,
            });
        },
        useIsEligible: f,
        useIsRingtoneDisabled: function () {
          return (0, s.useStateFromStores)(
            [r.default],
            () =>
              null == u.default.ringtone ||
              r.default.isSoundDisabled(u.default.ringtone)
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
          let e = (0, s.useStateFromStores)([r.default], () =>
              r.default.getDisabledSounds()
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
    124969: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Title: function () {
            return T;
          },
          SubTitle: function () {
            return E;
          },
          Image: function () {
            return Image;
          },
          Button: function () {
            return b;
          },
          Avatar: function () {
            return _;
          },
          GuildIcon: function () {
            return I;
          },
          ChannelIcon: function () {
            return S;
          },
          Input: function () {
            return v;
          },
          Block: function () {
            return A;
          },
          SubText: function () {
            return O;
          },
          AuthSpinner: function () {
            return R;
          },
          ActivityCount: function () {
            return j;
          },
          JoiningAs: function () {
            return D;
          },
          IncompatibleBrowser: function () {
            return C;
          },
          default: function () {
            return L;
          },
        }),
        n("834022");
      var s = n("37983");
      n("884691");
      var a = n("414456"),
        i = n.n(a),
        r = n("77078"),
        l = n("843962"),
        u = n("145131"),
        o = n("476263"),
        d = n("476765"),
        c = n("637888"),
        f = n("98013"),
        p = n("701909"),
        m = n("439932"),
        g = n("49111"),
        h = n("782340"),
        x = n("2710");
      let N = r.Avatar;
      null == N && (N = () => null);
      let T = e => {
          let { className: t, id: n, children: a } = e;
          return (0, s.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: i(x.title, t),
            id: n,
            children: a,
          });
        },
        E = e => {
          let { className: t, children: n } = e;
          return (0, s.jsx)(r.Text, {
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
        b = e => {
          let { className: t, ...n } = e,
            a = n.look === r.Button.Looks.LINK;
          return (0, s.jsx)(r.Button, {
            size: a ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !a,
            className: i(t, { [x.button]: !a, [x.linkButton]: a }),
            ...n,
          });
        };
      (b.Looks = r.Button.Looks),
        (b.Colors = r.Button.Colors),
        (b.Sizes = r.Button.Sizes);
      let _ = e => {
          let { className: t, src: n, size: a } = e;
          return (0, s.jsx)(N, {
            src: n,
            size: a,
            className: i(x.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        I = e => {
          let { guild: t, size: n, animate: a = !1, className: i } = e;
          return (0, s.jsx)(o.default, {
            active: !0,
            guild: t,
            size: n,
            animate: a,
            className: i,
          });
        };
      I.Sizes = o.default.Sizes;
      let S = e => {
        let { className: t, channel: n, size: a } = e;
        return (0, s.jsx)(N, {
          src: (0, l.getChannelIconURL)(n),
          size: a,
          className: i(x.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      S.Sizes = r.AvatarSizes;
      let v = e => {
          let {
              label: t,
              error: n,
              placeholder: a,
              value: l,
              className: u,
              inputClassName: o,
              setRef: c,
              type: f = "text",
              onChange: p,
              autoComplete: m,
              autoFocus: g,
              maxLength: h,
              spellCheck: N,
              name: T,
              description: E,
              required: b,
              onFocus: _,
              onBlur: I,
            } = e,
            S = (0, d.useUID)();
          return (0, s.jsxs)(r.FormItem, {
            title: t,
            error: n,
            className: u,
            required: b,
            tag: "label",
            htmlFor: S,
            children: [
              (0, s.jsx)(r.TextInput, {
                name: T,
                type: f,
                value: l,
                inputRef: c,
                placeholder: a,
                inputClassName: i(o, { [x.inputError]: null != n }),
                "aria-label": t,
                onChange: p,
                autoComplete: m,
                autoFocus: g,
                maxLength: h,
                spellCheck: N,
                id: S,
                onFocus: _,
                onBlur: I,
              }),
              null != E
                ? (0, s.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: x.description,
                    children: E,
                  })
                : null,
            ],
          });
        },
        A = e => {
          let { className: t, children: n } = e;
          return (0, s.jsx)("div", { className: i(x.block, t), children: n });
        },
        O = e => {
          let { className: t, children: n, isProminent: a } = e;
          return (0, s.jsx)(r.Text, {
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
            children: (0, s.jsx)(c.default, { className: x.spinnerVideo }),
          });
        },
        j = e => {
          let t,
            {
              online: n,
              total: a,
              className: l,
              flat: o,
              textClassName: d,
            } = e;
          return null == a
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, s.jsxs)("div", {
                  className: i(x.pill, x.pillOnline, o && x.pillFlat),
                  children: [
                    (0, s.jsx)("i", { className: x.pillIconOnline }),
                    (0, s.jsx)(r.Text, {
                      tag: "span",
                      className: i(x.pillMessage, d),
                      variant: "text-sm/normal",
                      children:
                        h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                          { membersOnline: n }
                        ),
                    }),
                  ],
                })),
              (0, s.jsxs)(u.default, {
                justify: u.default.Justify.CENTER,
                className: l,
                children: [
                  t,
                  (0, s.jsxs)("div", {
                    className: i(x.pill, o && x.pillFlat),
                    children: [
                      (0, s.jsx)("i", { className: x.pillIconTotal }),
                      (0, s.jsx)(r.Text, {
                        tag: "span",
                        className: i(x.pillMessage, d),
                        variant: "text-sm/normal",
                        children:
                          h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
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
                className: x.joiningAs,
                children: [
                  (0, s.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      h.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, s.jsx)(_, {
                    className: x.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: r.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, s.jsx)(r.Text, {
                    className: x.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username,
                  }),
                ],
              });
        },
        C = e => {
          let { className: t } = e;
          return (0, s.jsxs)(A, {
            className: t,
            children: [
              (0, s.jsx)(b, {
                onClick: () =>
                  window.open((0, f.getCurrentPlatformDownloadURL)()),
                children:
                  h.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                    platform: (0, f.getPlatformReadableName)(),
                  }),
              }),
              (0, s.jsx)(O, {
                className: x.downloadButtonSubtext,
                children: h.default.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: p.default.getArticleURL(
                    g.HelpdeskArticles.SUPPORTED_BROWSERS
                  ),
                }),
              }),
            ],
          });
        };
      var L = e => {
        let {
          className: t,
          contentClassName: n,
          tag: a = "section",
          onSubmit: r,
          children: l,
          expanded: u = !1,
          theme: o = g.ThemeTypes.DARK,
          style: d,
        } = e;
        return (0, s.jsxs)(a, {
          "data-theme": o,
          onSubmit: r,
          style: d,
          className: i(
            u ? x.authBoxExpanded : x.authBox,
            (0, m.getThemeClass)(o),
            t
          ),
          children: [
            (0, s.jsx)("div", { className: x.discordLogo }),
            (0, s.jsx)("div", {
              className: i(x.centeringWrapper, n),
              children: l,
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
            return I;
          },
        }),
        n("843762");
      var s = n("37983"),
        a = n("884691"),
        i = n("819855"),
        r = n("77078"),
        l = n("488284"),
        u = n("560528"),
        o = n("242777"),
        d = n("336406"),
        c = n("58608"),
        f = n("49111"),
        p = n("838623"),
        m = n("844389"),
        g = n("392518"),
        h = n("414298"),
        x = n("815143"),
        N = n("134072");
      function T(e) {
        let {
            movDark: t = o,
            movLight: n = d,
            mp4Dark: a = p,
            mp4Light: i = h,
            pngDark: r = m,
            pngLight: l = x,
            webmDark: c = g,
            webmLight: T = N,
          } = e,
          E = (0, u.getChromeVersion)(),
          b = [
            (0, s.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: r }, "png"),
          ],
          _ = [
            (0, s.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (E > 52 || -1 === E) &&
            (b.unshift(
              (0, s.jsx)("source", { src: c, type: "video/webm" }, "webm")
            ),
            _.unshift(
              (0, s.jsx)("source", { src: T, type: "video/webm" }, "webm")
            )),
          (0, u.supportsHEVCAlpha)() &&
            (b.unshift(
              (0, s.jsx)("source", { src: t, type: "video/mp4" }, "hevc")
            ),
            _.unshift(
              (0, s.jsx)("source", { src: n, type: "video/mp4" }, "hevc")
            )),
          { [f.ThemeTypes.DARK]: b, [f.ThemeTypes.LIGHT]: _ }
        );
      }
      let E = l.default.getAppSpinnerSources(),
        b = null != E ? T(E) : null,
        _ = T({});
      var I = e => {
        var t;
        let {
            loop: n = !0,
            autoPlay: l = !0,
            setRef: u,
            className: o,
            onReady: d,
          } = e,
          { theme: p } = (0, r.useThemeContext)(),
          { reducedMotion: m } = a.useContext(
            r.AccessibilityPreferencesContext
          ),
          g = _;
        null != b && (g = b);
        let h = (0, i.isThemeDark)(p) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT,
          x = null !== (t = g[h]) && void 0 !== t ? t : g[f.ThemeTypes.DARK];
        return (0, s.jsx)(
          c.default,
          {
            ref: u,
            onLoadedData: d,
            className: o,
            loop: !m.enabled && n,
            autoPlay: !m.enabled && l,
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
//# sourceMappingURL=98a509a7ec775ebbcf91.js.map
