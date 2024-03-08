(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23992"],
  {
    803452: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b77d7b48860bbefdeeb2.svg";
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
    724038: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var s = n("597755"),
        r = n.n(s),
        a = n("742270"),
        i = n("815157"),
        l = n("391679"),
        u = n("327037"),
        o = n("393414"),
        c = n("271938"),
        d = n("476108"),
        f = n("599110"),
        p = n("65300"),
        m = n("49111");
      async function g(e) {
        var t, n;
        let s = null === (t = r.os) || void 0 === t ? void 0 : t.family;
        if ("Android" === s || "iOS" === s) {
          let t =
              null !== (n = c.default.getFingerprint()) && void 0 !== n
                ? n
                : c.default.getId(),
            s = (0, i.generateAttemptId)();
          if (null == t && c.default.isAuthenticated())
            try {
              await (0, u.fetchCurrentUser)(), (t = c.default.getId());
            } catch {}
          return (0, i.default)((0, a.getDefaultDynamicLinkTemplate)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: s,
          });
        }
        return "discord://";
      }
      async function _(e) {
        let t = await g(e),
          n = (0, i.parseDynamicLink)(t);
        null != n &&
          f.default.track(m.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.maybeExtractId)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          p.default.launch(t, e => {
            !e && (0, o.replaceWith)(d.default.fallbackRoute);
          });
      }
    },
    94927: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("862205");
      let r = (0, s.createExperiment)({
        kind: "user",
        id: "2023-12_2023_eoy_ringtone",
        label: "EOY Ringtone 2023",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      var a = r;
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
        r = n("782340"),
        a = n("32209"),
        i = n("381471");
      let l = {
        experiment: s.default,
        startTimeMs: 17025768e5,
        endTimeMs: 17042184e5,
        isDesktopOnly: !0,
        ringtone: "call_ringing_snowsgiving",
        getRingtoneSettingsLabel: () =>
          r.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️",
        appSpinnerSources: { webmDark: a, webmLight: i },
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
        r = n("193990"),
        a = n("845579"),
        i = n("385649"),
        l = n("599110"),
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
            i.default.isSoundDisabled(u.default.ringtone)
          );
        },
        isRingtoneEligible: function () {
          let e = d();
          return e && p();
        },
        onRingtoneSettingValueChange: function (e) {
          let t = i.default.getDisabledSounds();
          if (null == u.default.ringtone) return;
          let n = t.filter(e => e !== u.default.ringtone);
          !e && n.push(u.default.ringtone),
            r.default.setDisabledSounds(n),
            l.default.track(o.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
              toggled_on: e,
              sound_name: u.default.ringtone,
            });
        },
        useIsEligible: f,
        useIsRingtoneDisabled: function () {
          return (0, s.useStateFromStores)(
            [i.default],
            () =>
              null == u.default.ringtone ||
              i.default.isSoundDisabled(u.default.ringtone)
          );
        },
        useIsRingtoneEligible: function () {
          let e = f();
          return e && p();
        },
        useRingtoneSettingDescription: function () {
          let e = a.NativePhoneIntegrationEnabled.useSetting();
          return e ? void 0 : c.default.Messages.ENABLE_PHONE_INTEGRATION;
        },
        useRingtoneSettingValue: function () {
          let e = (0, s.useStateFromStores)([i.default], () =>
              i.default.getDisabledSounds()
            ),
            t = a.NativePhoneIntegrationEnabled.useSetting();
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
    970366: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackAppUIViewed: function () {
            return u;
          },
        }),
        n("222007");
      var s = n("748820"),
        r = n("49671"),
        a = n("599110"),
        i = n("49111");
      let l = new (class e {
        trackEvent(e, t) {
          let n = Date.now();
          requestIdleCallback(() => {
            a.default.track(e, {
              ...(function () {
                var e, t, n;
                let s = "--campaign-id=",
                  a =
                    null !==
                      (n =
                        null === r.default || void 0 === r.default
                          ? void 0
                          : null === (t = r.default.processUtils) ||
                              void 0 === t
                            ? void 0
                            : null === (e = t.getMainArgvSync) || void 0 === e
                              ? void 0
                              : e.call(t)) && void 0 !== n
                      ? n
                      : [];
                for (let e of a)
                  if (e.startsWith(s)) return { referrer: e.substr(s.length) };
                return {};
              })(),
              ...(function () {
                let e = !1,
                  t = {
                    total_compressed_byte_size: 0,
                    total_uncompressed_byte_size: 0,
                    total_transfer_byte_size: 0,
                    js_compressed_byte_size: 0,
                    js_uncompressed_byte_size: 0,
                    js_transfer_byte_size: 0,
                    css_compressed_byte_size: 0,
                    css_uncompressed_byte_size: 0,
                    css_transfer_byte_size: 0,
                  };
                return (
                  null != window.performance &&
                    null != window.performance.getEntries &&
                    window.performance.getEntries().forEach(n => {
                      let s =
                          null != n.encodedBodySize
                            ? n.encodedBodySize
                            : n.decodedBodySize,
                        r =
                          null != n.decodedBodySize
                            ? n.decodedBodySize
                            : n.encodedBodySize,
                        a = n.transferSize;
                      null != r &&
                        null != s &&
                        ((e = !0),
                        (t.total_compressed_byte_size += s),
                        (t.total_uncompressed_byte_size += r),
                        null != a && (t.total_uncompressed_byte_size += a),
                        "resource" === n.entryType &&
                          ("script" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += s),
                            (t.js_uncompressed_byte_size += r),
                            null != a && (t.js_uncompressed_byte_size += a)),
                          "link" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += s),
                            (t.css_uncompressed_byte_size += r),
                            null != a && (t.css_uncompressed_byte_size += a))));
                    }),
                  e ? t : {}
                );
              })(),
              load_id: this.loadId,
              screen_name: t,
              duration_ms_since_app_opened:
                n - window.GLOBAL_ENV.HTML_TIMESTAMP,
            });
          });
        }
        trackAppUIViewed(e) {
          !this.appUIViewed &&
            (this.trackEvent(i.AnalyticEvents.APP_UI_VIEWED, e),
            (this.appUIViewed = !0));
        }
        constructor() {
          (this.loadId = (0, s.v4)()), (this.appUIViewed = !1);
        }
      })();
      function u(e) {
        l.trackAppUIViewed(e);
      }
    },
    476108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n("446674"),
        r = n("95410"),
        a = n("913144"),
        i = n("49111");
      let l = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = l,
        o = "LAST_VIEWED_PATH";
      class c extends s.default.PersistedStore {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
          u = null != e ? e : l;
        }
        get defaultRoute() {
          return i.Routes.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : i.Routes.ME;
        }
        get fallbackRoute() {
          return i.Routes.ME;
        }
        getState() {
          return u;
        }
      }
      (c.displayName = "DefaultRouteStore"),
        (c.persistKey = "DefaultRouteStore"),
        (c.migrations = [
          () => {
            let e = r.default.get(o, null);
            return r.default.remove(o), { lastViewedPath: e };
          },
        ]);
      var d = new c(a.default, {
        SAVE_LAST_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedPath = t), !0;
        },
        SAVE_LAST_NON_VOICE_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedNonVoicePath = t), !0;
        },
      });
    },
    124969: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Title: function () {
            return x;
          },
          SubTitle: function () {
            return v;
          },
          Image: function () {
            return Image;
          },
          Button: function () {
            return T;
          },
          Avatar: function () {
            return N;
          },
          GuildIcon: function () {
            return y;
          },
          ChannelIcon: function () {
            return S;
          },
          Input: function () {
            return E;
          },
          Block: function () {
            return I;
          },
          SubText: function () {
            return A;
          },
          AuthSpinner: function () {
            return j;
          },
          ActivityCount: function () {
            return R;
          },
          JoiningAs: function () {
            return w;
          },
          IncompatibleBrowser: function () {
            return L;
          },
          default: function () {
            return z;
          },
        }),
        n("834022");
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        i = n("77078"),
        l = n("843962"),
        u = n("145131"),
        o = n("476263"),
        c = n("476765"),
        d = n("637888"),
        f = n("98013"),
        p = n("701909"),
        m = n("439932"),
        g = n("49111"),
        _ = n("782340"),
        b = n("2710");
      let h = i.Avatar;
      null == h && (h = () => null);
      let x = e => {
          let { className: t, id: n, children: r } = e;
          return (0, s.jsx)(i.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: a(b.title, t),
            id: n,
            children: r,
          });
        },
        v = e => {
          let { className: t, children: n } = e;
          return (0, s.jsx)(i.Text, {
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
            className: a(b.image, t),
          });
        },
        T = e => {
          let { className: t, ...n } = e,
            r = n.look === i.Button.Looks.LINK;
          return (0, s.jsx)(i.Button, {
            size: r ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
            fullWidth: !r,
            className: a(t, { [b.button]: !r, [b.linkButton]: r }),
            ...n,
          });
        };
      (T.Looks = i.Button.Looks),
        (T.Colors = i.Button.Colors),
        (T.Sizes = i.Button.Sizes);
      let N = e => {
          let { className: t, src: n, size: r } = e;
          return (0, s.jsx)(h, {
            src: n,
            size: r,
            className: a(b.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        y = e => {
          let { guild: t, size: n, animate: r = !1, className: a } = e;
          return (0, s.jsx)(o.default, {
            active: !0,
            guild: t,
            size: n,
            animate: r,
            className: a,
          });
        };
      y.Sizes = o.default.Sizes;
      let S = e => {
        let { className: t, channel: n, size: r } = e;
        return (0, s.jsx)(h, {
          src: (0, l.getChannelIconURL)(n),
          size: r,
          className: a(b.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      S.Sizes = i.AvatarSizes;
      let E = e => {
          let {
              label: t,
              error: n,
              placeholder: r,
              value: l,
              className: u,
              inputClassName: o,
              setRef: d,
              type: f = "text",
              onChange: p,
              autoComplete: m,
              autoFocus: g,
              maxLength: _,
              spellCheck: h,
              name: x,
              description: v,
              required: T,
              onFocus: N,
              onBlur: y,
            } = e,
            S = (0, c.useUID)();
          return (0, s.jsxs)(i.FormItem, {
            title: t,
            error: n,
            className: u,
            required: T,
            tag: "label",
            htmlFor: S,
            children: [
              (0, s.jsx)(i.TextInput, {
                name: x,
                type: f,
                value: l,
                inputRef: d,
                placeholder: r,
                inputClassName: a(o, { [b.inputError]: null != n }),
                "aria-label": t,
                onChange: p,
                autoComplete: m,
                autoFocus: g,
                maxLength: _,
                spellCheck: h,
                id: S,
                onFocus: N,
                onBlur: y,
              }),
              null != v
                ? (0, s.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: b.description,
                    children: v,
                  })
                : null,
            ],
          });
        },
        I = e => {
          let { className: t, children: n } = e;
          return (0, s.jsx)("div", { className: a(b.block, t), children: n });
        },
        A = e => {
          let { className: t, children: n, isProminent: r } = e;
          return (0, s.jsx)(i.Text, {
            variant: r ? "text-sm/normal" : "text-xs/normal",
            className: a(b.subText, t),
            children: n,
          });
        },
        j = e => {
          let { className: t } = e;
          return (0, s.jsx)(u.default, {
            direction: u.default.Direction.VERTICAL,
            align: u.default.Align.CENTER,
            className: t,
            children: (0, s.jsx)(d.default, { className: b.spinnerVideo }),
          });
        },
        R = e => {
          let t,
            {
              online: n,
              total: r,
              className: l,
              flat: o,
              textClassName: c,
            } = e;
          return null == r
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, s.jsxs)("div", {
                  className: a(b.pill, b.pillOnline, o && b.pillFlat),
                  children: [
                    (0, s.jsx)("i", { className: b.pillIconOnline }),
                    (0, s.jsx)(i.Text, {
                      tag: "span",
                      className: a(b.pillMessage, c),
                      variant: "text-sm/normal",
                      children:
                        _.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
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
                    className: a(b.pill, o && b.pillFlat),
                    children: [
                      (0, s.jsx)("i", { className: b.pillIconTotal }),
                      (0, s.jsx)(i.Text, {
                        tag: "span",
                        className: a(b.pillMessage, c),
                        variant: "text-sm/normal",
                        children:
                          _.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: r }
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        w = e => {
          let { user: t } = e;
          return null == t
            ? null
            : (0, s.jsxs)("div", {
                className: b.joiningAs,
                children: [
                  (0, s.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      _.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, s.jsx)(N, {
                    className: b.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: i.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, s.jsx)(i.Text, {
                    className: b.joiningAsUsername,
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
          return (0, s.jsxs)(I, {
            className: t,
            children: [
              (0, s.jsx)(T, {
                onClick: () =>
                  window.open((0, f.getCurrentPlatformDownloadURL)()),
                children:
                  _.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                    platform: (0, f.getPlatformReadableName)(),
                  }),
              }),
              (0, s.jsx)(A, {
                className: b.downloadButtonSubtext,
                children: _.default.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: p.default.getArticleURL(
                    g.HelpdeskArticles.SUPPORTED_BROWSERS
                  ),
                }),
              }),
            ],
          });
        };
      var z = e => {
        let {
          className: t,
          contentClassName: n,
          tag: r = "section",
          onSubmit: i,
          children: l,
          expanded: u = !1,
          theme: o = g.ThemeTypes.DARK,
          style: c,
        } = e;
        return (0, s.jsxs)(r, {
          "data-theme": o,
          onSubmit: i,
          style: c,
          className: a(
            u ? b.authBoxExpanded : b.authBox,
            (0, m.getThemeClass)(o),
            t
          ),
          children: [
            (0, s.jsx)("div", { className: b.discordLogo }),
            (0, s.jsx)("div", {
              className: a(b.centeringWrapper, n),
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
            return y;
          },
        }),
        n("843762");
      var s = n("37983"),
        r = n("884691"),
        a = n("819855"),
        i = n("77078"),
        l = n("488284"),
        u = n("560528"),
        o = n("242777"),
        c = n("336406"),
        d = n("58608"),
        f = n("49111"),
        p = n("838623"),
        m = n("844389"),
        g = n("392518"),
        _ = n("414298"),
        b = n("815143"),
        h = n("134072");
      function x(e) {
        let {
            movDark: t = o,
            movLight: n = c,
            mp4Dark: r = p,
            mp4Light: a = _,
            pngDark: i = m,
            pngLight: l = b,
            webmDark: d = g,
            webmLight: x = h,
          } = e,
          v = (0, u.getChromeVersion)(),
          T = [
            (0, s.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: i }, "png"),
          ],
          N = [
            (0, s.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (v > 52 || -1 === v) &&
            (T.unshift(
              (0, s.jsx)("source", { src: d, type: "video/webm" }, "webm")
            ),
            N.unshift(
              (0, s.jsx)("source", { src: x, type: "video/webm" }, "webm")
            )),
          (0, u.supportsHEVCAlpha)() &&
            (T.unshift(
              (0, s.jsx)("source", { src: t, type: "video/mp4" }, "hevc")
            ),
            N.unshift(
              (0, s.jsx)("source", { src: n, type: "video/mp4" }, "hevc")
            )),
          { [f.ThemeTypes.DARK]: T, [f.ThemeTypes.LIGHT]: N }
        );
      }
      let v = l.default.getAppSpinnerSources(),
        T = null != v ? x(v) : null,
        N = x({});
      var y = e => {
        var t;
        let {
            loop: n = !0,
            autoPlay: l = !0,
            setRef: u,
            className: o,
            onReady: c,
          } = e,
          { theme: p } = (0, i.useThemeContext)(),
          { reducedMotion: m } = r.useContext(
            i.AccessibilityPreferencesContext
          ),
          g = N;
        null != T && (g = T);
        let _ = (0, a.isThemeDark)(p) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT,
          b = null !== (t = g[_]) && void 0 !== t ? t : g[f.ThemeTypes.DARK];
        return (0, s.jsx)(
          d.default,
          {
            ref: u,
            onLoadedData: c,
            className: o,
            loop: !m.enabled && n,
            autoPlay: !m.enabled && l,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: b,
          },
          p
        );
      };
    },
  },
]);
//# sourceMappingURL=23992.18f2bb00f0c7a03f2eaf.js.map
