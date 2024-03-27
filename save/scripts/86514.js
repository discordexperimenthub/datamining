(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86514"],
  {
    868148: function (e, t, l) {
      var n = l("728110"),
        a = l("705646");
      e.exports = function e(t, l, s, r, i) {
        var u = -1,
          o = t.length;
        for (s || (s = a), i || (i = []); ++u < o; ) {
          var d = t[u];
          l > 0 && s(d)
            ? l > 1
              ? e(d, l - 1, s, r, i)
              : n(i, d)
            : !r && (i[i.length] = d);
        }
        return i;
      };
    },
    705646: function (e, t, l) {
      var Symbol = l("506264"),
        n = l("971433"),
        a = l("486036"),
        s = Symbol ? Symbol.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return a(e) || n(e) || !!(s && e && e[s]);
      };
    },
    257859: function (e, t, l) {
      var n = l("868148");
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? n(e, 1) : [];
      };
    },
    268258: function (e, t, l) {
      "use strict";
      l("222007"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringSimilarity = void 0);
      (t.stringSimilarity = function (e, t, l, n) {
        if (
          (void 0 === l && (l = 2),
          void 0 === n && (n = !1),
          !n && ((e = e.toLowerCase()), (t = t.toLowerCase())),
          e.length < l || t.length < l)
        )
          return 0;
        for (var a = new Map(), s = 0; s < e.length - (l - 1); s++) {
          var r = e.substr(s, l);
          a.set(r, a.has(r) ? a.get(r) + 1 : 1);
        }
        for (var i = 0, u = 0; u < t.length - (l - 1); u++) {
          var o = t.substr(u, l),
            d = a.has(o) ? a.get(o) : 0;
          d > 0 && (a.set(o, d - 1), i++);
        }
        return (2 * i) / (e.length + t.length - (l - 1) * 2);
      }),
        (t.default = t.stringSimilarity);
    },
    64847: function (e, t, l) {
      "use strict";
      e.exports = l.p + "c038718481fa8dc048db.svg";
    },
    366801: function (e, t, l) {
      "use strict";
      e.exports = l.p + "ee16b3ebdee5b68090dc.svg";
    },
    267218: function (e, t, l) {
      "use strict";
      e.exports = l.p + "8a9877b68c4ef6b46419.svg";
    },
    17137: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("145027");
      l.es(n, t);
    },
    265614: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("247230");
      l.es(n, t);
    },
    587864: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("53531");
      l.es(n, t);
    },
    619335: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return j;
          },
        });
      var n = l("274870"),
        a = l("116320"),
        s = l("617559"),
        r = l("213523"),
        i = l("593195"),
        u = l("361777"),
        o = l("497757"),
        d = l("774223"),
        c = l("991497"),
        f = l("393621"),
        m = l("905999"),
        S = l("660074"),
        C = l("990745"),
        E = l("190986"),
        h = l("721618"),
        N = l("733160"),
        g = l("990864"),
        _ = l("274652"),
        p = l("922744"),
        I = l("155207"),
        x = l("745183"),
        v = l("368121"),
        A = l("944633"),
        T = l("228427"),
        R = l("959097"),
        L = l("656038"),
        M = l("49111");
      function j(e, t) {
        switch (e.type) {
          case M.ChannelTypes.DM:
            return a.default;
          case M.ChannelTypes.GROUP_DM:
            let l = (0, n.getIsBroadcastingGDM)(e.id);
            return l ? d.default : I.default;
          case M.ChannelTypes.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return _.default;
            if ((0, L.default)(e)) return g.default;
            else return N.default;
          case M.ChannelTypes.GUILD_TEXT:
            if (e.id === (null == t ? void 0 : t.rulesChannelId))
              return r.default;
            if (e.isNSFW()) return o.default;
            else if ((0, L.default)(e)) return u.default;
            else return i.default;
          case M.ChannelTypes.GUILD_FORUM:
            let j = e.isMediaChannel();
            if (e.isNSFW()) return j ? h.default : m.default;
            if ((0, L.default)(e)) return j ? E.default : f.default;
            else return j ? C.default : c.default;
          case M.ChannelTypes.GUILD_MEDIA:
            if (e.isNSFW()) return h.default;
            if ((0, L.default)(e)) return E.default;
            else return C.default;
          case M.ChannelTypes.GUILD_STAGE_VOICE:
            return T.default;
          case M.ChannelTypes.GUILD_VOICE:
            if ((0, L.default)(e)) return A.default;
            return v.default;
          case M.ChannelTypes.ANNOUNCEMENT_THREAD:
          case M.ChannelTypes.PUBLIC_THREAD:
            if (e.isNSFW()) return p.default;
            if (e.isForumPost()) return S.default;
            else return R.default;
          case M.ChannelTypes.PRIVATE_THREAD:
            if (e.isNSFW()) return p.default;
            return x.default;
          case M.ChannelTypes.GUILD_DIRECTORY:
            return s.default;
          default:
            return null;
        }
      }
    },
    187001: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return C;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("77078"),
        r = l("997289"),
        i = l("685665"),
        u = l("649844"),
        o = l("599110"),
        d = l("49111"),
        c = l("646718"),
        f = l("782340"),
        m = l("304756"),
        S = l("961523"),
        C = () => {
          let e = (0, r.useAnalyticsContext)(),
            { analyticsLocations: t } = (0, i.default)();
          return (
            a.useEffect(() => {
              o.default.track(d.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: c.PremiumUpsellTypes
                  .CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
                location: e.location,
                location_stack: t,
              });
            }, []),
            (0, n.jsx)(s.FormItem, {
              className: S.modalContent,
              children: (0, n.jsxs)("div", {
                className: m.nitroUpsellContainer,
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)(s.Heading, {
                        variant: "heading-lg/bold",
                        color: "always-white",
                        className: m.nitroUpsellTitle,
                        children:
                          f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE,
                      }),
                      (0, n.jsx)(s.Text, {
                        className: m.nitroUpsellSubtitle,
                        variant: "text-sm/normal",
                        color: "always-white",
                        children:
                          f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format(),
                      }),
                    ],
                  }),
                  (0, n.jsx)(s.Button, {
                    look: s.Button.Looks.INVERTED,
                    onClick: () => {
                      (0, u.default)({
                        subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: t,
                      });
                    },
                    children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_CTA,
                  }),
                ],
              }),
            })
          );
        };
    },
    504219: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return A;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("627445"),
        r = l.n(s),
        i = l("446674"),
        u = l("151426"),
        o = l("77078"),
        d = l("10641"),
        c = l("235145"),
        f = l("369964"),
        m = l("227602"),
        S = l("701909"),
        C = l("13798"),
        E = l("386045"),
        h = l("30591"),
        N = l("803725"),
        g = l("49111"),
        _ = l("994428"),
        p = l("782340"),
        I = l("942175"),
        x = l("961523");
      let v = e => {
        let {
            clipsEnabled: t,
            isAnimationDone: l,
            guildId: s,
            children: r,
          } = e,
          m = (0, i.useStateFromStores)([E.default], () =>
            E.default.getHardwareClassification()
          ),
          C =
            m === h.ClipsHardwareClassification.MEETS_MINIMUM ||
            m === h.ClipsHardwareClassification.UNKNOWN,
          x = m === h.ClipsHardwareClassification.BELOW_MINIMUM,
          v = l && (C || x) && !t,
          [A, T] = (0, c.useGetDismissibleContent)(
            v ? [u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []
          ),
          R = A === u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
        a.useEffect(() => {
          t &&
            (0, d.markDismissibleContentAsDismissed)(
              u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
              { forceTrack: !0 }
            );
        }, [t]);
        let L = (e, t) => {
          e.stopPropagation(),
            e.preventDefault(),
            null == t || t(),
            T(_.ContentDismissActionType.UNKNOWN);
        };
        return (0, n.jsx)(o.Popout, {
          shouldShow: R,
          position: "right",
          align: "center",
          renderPopout: e => {
            let { closePopout: t } = e;
            return (0, n.jsx)(f.default, {
              dismissibleContent:
                u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
              shouldUseHorizontalButtons: !0,
              inlineArt: !0,
              artClassName: I.clipsEducationArt,
              position: "right",
              header:
                p.default.Messages
                  .CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
              headerClassName: I.clipsEducationHeader,
              body: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    children:
                      p.default.Messages
                        .CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY,
                  }),
                  x
                    ? (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: I.warningText,
                        children:
                          p.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format(
                            {
                              url: S.default.getArticleURL(
                                g.HelpdeskArticles.CLIPS
                              ),
                            }
                          ),
                      })
                    : null,
                ],
              }),
              tryItText: p.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
              onTryFeature: e => {
                (0, N.updateClipsEnabled)({
                  clipsEnabled: !0,
                  guildId: s,
                  trackAnalytics: !0,
                }),
                  L(e);
              },
              onClose: e => {
                L(e, t);
              },
            });
          },
          children: () => r,
        });
      };
      var A = function (e) {
        let { isAnimationDone: t, guildId: l } = e,
          a = (0, i.useStateFromStores)(
            [E.default],
            () => E.default.getSettings().clipsEnabled
          ),
          s = (0, i.useStateFromStores)([m.default], () =>
            m.default.getKeybindForAction(g.GlobalKeybindActions.SAVE_CLIP)
          );
        r(null != s, "Clips keybind should be set");
        let u = C.toString(s.shortcut, !0);
        return (0, n.jsx)(o.FormItem, {
          title: p.default.Messages.CLIPS_SETTINGS,
          titleClassName: x.formItemTitle,
          className: x.modalContent,
          children: (0, n.jsxs)("div", {
            className: I.container,
            children: [
              (0, n.jsx)(v, {
                clipsEnabled: a,
                guildId: l,
                isAnimationDone: t,
                children: (0, n.jsx)(o.FormSwitch, {
                  className: I.formSwitch,
                  value: a,
                  onChange: e =>
                    (0, N.updateClipsEnabled)({
                      clipsEnabled: e,
                      guildId: l,
                      trackAnalytics: !0,
                    }),
                  hideBorder: !0,
                  children: p.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
                }),
              }),
              (0, n.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "interactive-normal",
                className: I.description,
                children:
                  p.default.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
                    keybind: u,
                    keybindHook: () =>
                      (0, n.jsx)("span", {
                        className: I.keybindHintKeys,
                        children: (0, n.jsx)(o.KeyCombo, {
                          className: I.keybindShortcut,
                          shortcut: u,
                        }),
                      }),
                  }),
              }),
            ],
          }),
        });
      };
    },
    369964: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return C;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        r = l.n(s),
        i = l("77078"),
        u = l("731898"),
        o = l("10641"),
        d = l("275623"),
        c = l("216422"),
        f = l("994428"),
        m = l("782340"),
        S = l("175787"),
        C = a.forwardRef(function (e, t) {
          let {
              body: l,
              header: s,
              artClassName: C,
              headerClassName: E,
              contentClassName: h,
              tryItText: N,
              dismissText: g,
              onTryFeature: _,
              onClose: p,
              className: I,
              inlineArt: x = !1,
              isPremiumFeature: v = !1,
              shouldUseHorizontalButtons: A = !1,
              showGIFTag: T = !1,
              dismissibleContent: R,
              position: L = "top",
              align: M = "center",
              art: j,
              isPremiumEarlyAccess: O = !1,
              maxWidth: D = 280,
            } = e,
            P = A ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX,
            [U, w] = a.useState(!1),
            { ref: G, width: b } = (0, u.default)();
          function y(e) {
            (0, o.markDismissibleContentAsDismissed)(R, { dismissAction: e });
          }
          return (
            a.useEffect(() => {
              var e, t;
              let l =
                (null !==
                  (t =
                    null === (e = G.current) || void 0 === e
                      ? void 0
                      : e.scrollWidth) && void 0 !== t
                  ? t
                  : 0) + 64;
              !U && l > D && w(!0);
            }, [U, b, G, D]),
            a.useEffect(() => {
              (0, o.requestMarkDismissibleContentAsShown)(R);
            }, [R]),
            (0, n.jsx)("div", {
              className: I,
              ref: t,
              children: (0, n.jsxs)("div", {
                className: r(S.content, h, {
                  [S.contentNoArt]: null == C || x,
                  [S.contentPremium]: v || O,
                }),
                children: [
                  (0, n.jsxs)("div", {
                    className: r(C, x ? S.artInline : S.artAbsolute),
                    children: [
                      T && (0, n.jsx)(d.default, { className: S.gifTag }),
                      j,
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: S.body,
                    children: [
                      (0, n.jsxs)(i.Heading, {
                        className: r(v ? S.headerWithPremiumIcon : S.header, E),
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: [
                          v && !O
                            ? (0, n.jsx)(c.default, {
                                className: S.premiumIcon,
                              })
                            : null,
                          O
                            ? (0, n.jsxs)(i.Text, {
                                color: "always-white",
                                variant: "eyebrow",
                                className: S.earlyAccessBadgeContainer,
                                children: [
                                  (0, n.jsx)(c.default, {
                                    className: S.earlyAccessIcon,
                                  }),
                                  (0, n.jsx)("span", {
                                    className: S.earlyAccessText,
                                    children:
                                      m.default.Messages
                                        .REMIXING_TOOLTIP_NITRO_EARLY_ACCESS,
                                  }),
                                ],
                              })
                            : null,
                          s,
                        ],
                      }),
                      null == l
                        ? null
                        : "string" == typeof l
                          ? (0, n.jsx)(i.Text, {
                              variant: "text-sm/normal",
                              color: "always-white",
                              children: l,
                            })
                          : l,
                    ],
                  }),
                  (0, n.jsx)("div", {
                    ref: G,
                    className:
                      U || !A
                        ? S.buttonContainerVertical
                        : S.buttonContainerHorizontal,
                    children:
                      null != _
                        ? (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(i.Button, {
                                className: S.button,
                                size: P,
                                onClick: e => {
                                  null == p || p(e),
                                    _(e),
                                    y(f.ContentDismissActionType.PRIMARY);
                                },
                                color:
                                  v || O
                                    ? i.Button.Colors.BRAND
                                    : i.Button.Colors.WHITE,
                                look:
                                  v || O
                                    ? i.Button.Looks.INVERTED
                                    : i.Button.Looks.FILLED,
                                children:
                                  null != N
                                    ? N
                                    : m.default.Messages
                                        .EDUCATION_NEW_FEATURE_TRY_IT,
                              }),
                              (0, n.jsx)(i.Button, {
                                className: S.button,
                                size: P,
                                onClick: e => {
                                  null == p || p(e),
                                    y(f.ContentDismissActionType.DISMISS);
                                },
                                color:
                                  v || O
                                    ? i.Button.Colors.WHITE
                                    : i.Button.Colors.BRAND,
                                look:
                                  v || O
                                    ? i.Button.Looks.LINK
                                    : i.Button.Looks.FILLED,
                                children:
                                  null != g
                                    ? g
                                    : m.default.Messages
                                        .EDUCATION_NEW_FEATURE_DISMISS,
                              }),
                            ],
                          })
                        : (0, n.jsx)(i.Button, {
                            className: S.button,
                            size: i.Button.Sizes.MAX,
                            onClick: e => {
                              null == p || p(e),
                                y(f.ContentDismissActionType.PRIMARY);
                            },
                            color: i.Button.Colors.WHITE,
                            children:
                              m.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM,
                          }),
                  }),
                  (0, n.jsx)("div", {
                    className: r(S.pointer, {
                      [S.bottomPointer]: "top" === L,
                      [S.centerLeftPointer]: "right" === L && "center" === M,
                      [S.topLeftPointer]: "right" === L && "top" === M,
                    }),
                  }),
                ],
              }),
            })
          );
        });
    },
    301834: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var n = l("862205");
      let a = (0, n.createExperiment)({
        kind: "user",
        id: "2023-06_golive_capture_card",
        label: "GoLive Capture Card Support",
        defaultConfig: { enableGoLiveCaptureCard: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable go live capture card support",
            config: { enableGoLiveCaptureCard: !0 },
          },
        ],
      });
      var s = a;
    },
    288207: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return a;
          },
        }),
        l("222007");
      let n = new Set(["nvidia"]);
      function a(e) {
        for (let t of Object.keys(e)) {
          let l = e[t];
          if (null != l && null == l.error && n.has(t)) return !0;
        }
        return !1;
      }
    },
    439792: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        }),
        l("222007");
      var n = l("570277"),
        a = l.n(n),
        s = l("773336");
      let r = {
        [s.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function i(e) {
        let t = r[(0, s.getPlatform)()];
        if (null == t) return !1;
        for (let l of Object.keys(e)) {
          let n = e[l],
            s = t[l];
          if (null == n || null == s || null != n.error) continue;
          let r = (function (e) {
            var t, l;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0");
          })(n);
          if (!a.satisfies(r, s)) return !0;
        }
        return !1;
      }
    },
    7738: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        }),
        l("222007");
      var n = l("773356"),
        a = l("686298");
      function s(e, t, l) {
        let s = a.ApplicationStreamPresetValues[e];
        for (let a of s)
          if ((0, n.default)(e, a.resolution, a.fps, t, l))
            return [a.resolution, a.fps];
        return null;
      }
    },
    709496: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        }),
        l("222007");
      var n = l("570277"),
        a = l.n(n),
        s = l("773336");
      let r = { [s.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function i(e) {
        let t = r[(0, s.getPlatform)()];
        if (null == t) return !1;
        for (let l of Object.keys(e)) {
          let n = e[l],
            s = t[l];
          if (null == n || null == s || null != n.error) continue;
          let r = (function (e) {
            var t, l;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0");
          })(n);
          if (!a.satisfies(r, s)) return !0;
        }
        return !1;
      }
    },
    767960: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return S;
          },
        });
      var n = l("446674"),
        a = l("913144"),
        s = l("773336"),
        r = l("50885"),
        i = l("288207"),
        u = l("439792"),
        o = l("709496");
      let d = !1,
        c = !0,
        f = !1;
      class m extends n.default.Store {
        initialize() {
          !(!s.isPlatformEmbedded || __OVERLAY__) &&
            r.default.getGPUDriverVersions().then(e => {
              (d = (0, o.default)(e)),
                (c = (0, i.default)(e)),
                (f = (0, u.default)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return d;
        }
        get canUseHardwareAcceleration() {
          return c;
        }
        get problematicGPUDriver() {
          return f;
        }
        getState() {
          return {
            GPUDriversOutdated: d,
            canUseHardwareAcceleration: c,
            problematicGPUDriver: f,
          };
        }
      }
      m.displayName = "StreamingCapabilitiesStore";
      var S = new m(a.default, {
        OVERLAY_INITIALIZE: function (e) {
          let { streamingCapabilitiesStoreState: t } = e;
          (d = t.GPUDriversOutdated), (c = t.canUseHardwareAcceleration);
        },
      });
    },
    375202: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return a;
          },
        });
      var n = l("819068");
      function a(e, t) {
        if (__OVERLAY__) {
          let e = t.getGame(),
            l = (0, n.getPID)();
          return null == e || null == l
            ? null
            : {
                id: e.id,
                pid: l,
                pidPath: [],
                nativeProcessObserverId: 0,
                hidden: !1,
                elevated: !1,
                name: e.name,
                lastFocused: 0,
                exePath: "",
                exeName: "",
                cmdLine: "",
                processName: "",
                distributor: null,
                windowHandle: null,
                fullscreenType: 0,
              };
        }
        return e.getVisibleGame();
      }
    },
    916262: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var n = l("570277"),
        a = l.n(n),
        s = l("229353"),
        r = l("49671"),
        i = l("42887"),
        u = l("773336"),
        o = l("706530"),
        d = l("353927"),
        c = l("782340");
      function f() {
        if (!i.default.supports(d.Features.SOUNDSHARE))
          return s.GO_LIVE_SCREENSHARE_NO_SOUND;
        if (
          (0, u.isWindows)() &&
          !a.satisfies(
            null === r.default || void 0 === r.default
              ? void 0
              : r.default.os.release,
            o.WINDOWS_SOUNDSHARE_VERSION
          )
        )
          return c.default.Messages
            .GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
        if (
          (0, u.isMac)() &&
          !a.satisfies(
            null === r.default || void 0 === r.default
              ? void 0
              : r.default.os.release,
            o.DARWIN_SOUNDSHARE_VERSION
          )
        )
          return c.default.Messages
            .GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
        return null;
      }
    },
    75974: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return g;
          },
        }),
        l("808653"),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("627445"),
        r = l.n(s),
        i = l("917351"),
        u = l.n(i),
        o = l("268258"),
        d = l("446674"),
        c = l("77078"),
        f = l("42887"),
        m = l("326620"),
        S = l("32649"),
        C = l("782340"),
        E = l("809213"),
        h = l("961523"),
        N = l("890957");
      function g(e) {
        let {
          selectedSource: t,
          onChangeVideoDeviceSource: l,
          onChangeAudioDevice: s,
        } = e;
        r(null != t, "Camera capture device cannot be null");
        let i = (0, S.default)(),
          g = (0, d.useStateFromStores)([f.default], () =>
            f.default.getInputDevices()
          ),
          [_, p] = a.useState(
            (function (e, t, l) {
              if (null != t && null != l) {
                let n = t.find(t => t.id === e);
                if (null == n) return;
                let a = u.reduce(l, (e, t) =>
                  (0, o.stringSimilarity)(n.name, t.name) >
                  (0, o.stringSimilarity)(n.name, e.name)
                    ? t
                    : e
                );
                if (null != a) return a.id;
              }
            })(t.id, i, g)
          );
        return (
          null != _ && s(_),
          (0, n.jsx)(a.Fragment, {
            children: (0, n.jsxs)(c.FormItem, {
              title: "Capture Device",
              className: h.modalContent,
              children: [
                (0, n.jsx)(c.FormItem, {
                  className: N.marginTop8,
                  children: (0, n.jsxs)(m.default, {
                    children: [
                      (0, n.jsx)("span", {
                        className: E.ellipsisText,
                        children: t.name,
                      }),
                      (0, n.jsx)(c.Button, {
                        className: E.changeButton,
                        color: c.Button.Colors.PRIMARY,
                        size: c.Button.Sizes.SMALL,
                        onClick: l,
                        children: C.default.Messages.CHANGE,
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(c.FormItem, {
                  className: N.marginTop8,
                  title: C.default.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                  children: (0, n.jsx)(c.SingleSelect, {
                    value: _,
                    className: N.marginaTop8,
                    onChange: e => {
                      p(e), s(e);
                    },
                    options: u.map(g, e => {
                      let { id: t, name: l } = e;
                      return { value: t, label: l };
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    359812: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("446674"),
        s = l("77078"),
        r = l("923959"),
        i = l("305961"),
        u = l("957255"),
        o = l("697218"),
        d = l("316133"),
        c = l("223913"),
        f = l("379385"),
        m = l("644169"),
        S = l("782340"),
        C = l("45988");
      function E(e) {
        let {
            selectedChannelId: t,
            guildId: l,
            onChangeSelectedChannelId: E,
          } = e,
          h = (0, a.useStateFromStores)([o.default], () =>
            o.default.getCurrentUser()
          ),
          N = (0, a.useStateFromStores)([i.default, r.default, u.default], () =>
            (0, c.getStreamEligibleChannels)(
              r.default.getChannels(l),
              i.default,
              u.default
            )
          ),
          g = (0, a.useStateFromStores)([d.default], () =>
            d.default.getVoiceStates(l)
          ),
          _ = N.map(e => {
            var l;
            return {
              name: (0, n.jsx)(f.default, {
                channel: e,
                users:
                  null === (l = g[e.id]) || void 0 === l
                    ? void 0
                    : l
                        .filter(e => {
                          let { user: t } = e;
                          return t.id !== (null == h ? void 0 : h.id);
                        })
                        .map(e => {
                          let { user: t } = e;
                          return t;
                        }),
                selected: e.id === t,
              }),
              value: e.id,
            };
          });
        return (0, n.jsx)(m.default, {
          title: S.default.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
          scrollerInnerClassName: C.channelSelectScrollerInner,
          children: (0, n.jsx)(s.RadioGroup, {
            options: _,
            value: t,
            itemInfoClassName: C.channelInfoWrapper,
            itemTitleClassName: C.channelTitleWrapper,
            onChange: e => {
              let { value: t } = e;
              return E(t);
            },
          }),
        });
      }
    },
    636909: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return et;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        r = l.n(s),
        i = l("446674"),
        u = l("77078"),
        o = l("79112"),
        d = l("299285"),
        c = l("454273"),
        f = l("56947"),
        m = l("187001"),
        S = l("504219"),
        C = l("161454"),
        E = l("845579"),
        h = l("216503"),
        N = l("42203"),
        g = l("525065"),
        _ = l("305961"),
        p = l("42887"),
        I = l("18494"),
        x = l("697218"),
        v = l("703370"),
        A = l("145131"),
        T = l("953109"),
        R = l("476263"),
        L = l("267675"),
        M = l("423487"),
        j = l("233437"),
        O = l("599110"),
        D = l("449008"),
        P = l("701909"),
        U = l("773336"),
        w = l("767960"),
        G = l("375202"),
        b = l("916262"),
        y = l("75974"),
        V = l("359812"),
        H = l("273405"),
        k = l("326620"),
        F = l("985997"),
        B = l("16750"),
        W = l("706530"),
        z = l("49111"),
        Z = l("397336"),
        Y = l("782340"),
        K = l("481252"),
        Q = l("961523");
      function X(e) {
        let {
            selectedSource: t,
            selectSource: l,
            sourceChanged: a,
            onChangeSource: s,
          } = e,
          r = (0, i.useStateFromStores)([C.default, v.default], () =>
            (0, U.isWindows)() ? (0, G.default)(C.default, v.default) : null
          ),
          o = (0, i.useStateFromStores)([d.default], () =>
            (null == r ? void 0 : r.id) != null
              ? d.default.getApplication(r.id)
              : null
          ),
          c = (0, i.useStateFromStores)([C.default], () =>
            C.default.getRunningGames()
          ),
          f = (0, i.useStateFromStoresArray)(
            [d.default],
            () =>
              c
                .map(e =>
                  null != e.id ? d.default.getApplication(e.id) : null
                )
                .filter(D.isNotNullish),
            [c]
          ),
          m = null;
        if ((null != t ? (m = t.name) : null != r && (m = r.name), null == m))
          return null;
        let S = (0, B.default)(r, t, c),
          E = a
            ? f.find(e => {
                let { id: t } = e;
                return t === (null == S ? void 0 : S.id);
              })
            : o,
          h = null != t && t.id.startsWith("screen") ? L.default : j.default;
        return (0, n.jsx)(u.FormItem, {
          title: Y.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
          className: Q.modalContent,
          titleClassName: Q.formItemTitleVerySlim,
          children: (0, n.jsxs)(k.default, {
            children: [
              null != E
                ? (0, n.jsx)(T.default, {
                    game: E,
                    size: T.default.Sizes.XSMALL,
                    className: K.selectedIcon,
                  })
                : (0, n.jsx)(h, { className: K.selectedIcon }),
              (0, n.jsx)("span", { className: K.ellipsisText, children: m }),
              l
                ? (0, n.jsx)(u.Button, {
                    className: K.changeButton,
                    color: u.Button.Colors.PRIMARY,
                    size: u.Button.Sizes.SMALL,
                    onClick: s,
                    children: Y.default.Messages.CHANGE,
                  })
                : null,
            ],
          }),
        });
      }
      function J(e) {
        let { onChange: t, guildId: l } = e,
          a = (0, i.useStateFromStores)([_.default], () =>
            _.default.getGuild(l)
          );
        return null == a
          ? (t(), null)
          : (0, n.jsx)(u.FormItem, {
              title: Y.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
              className: Q.modalContent,
              titleClassName: Q.formItemTitle,
              children: (0, n.jsxs)(k.default, {
                children: [
                  (0, n.jsx)(R.default, {
                    guild: a,
                    size: R.default.Sizes.SMALLER,
                    className: K.selectedIcon,
                  }),
                  (0, n.jsx)("span", {
                    className: K.ellipsisText,
                    children: a.toString(),
                  }),
                  (0, n.jsx)(u.Button, {
                    className: K.changeButton,
                    color: u.Button.Colors.PRIMARY,
                    size: u.Button.Sizes.SMALL,
                    onClick: t,
                    children: Y.default.Messages.CHANGE,
                  }),
                ],
              }),
            });
      }
      function q(e) {
        let { text: t } = e;
        return (0, n.jsxs)(A.default, {
          align: A.default.Align.CENTER,
          className: K.warning,
          children: [
            (0, n.jsx)(M.default, { className: K.warningIcon }),
            (0, n.jsx)(u.Text, {
              color: "none",
              variant: "text-xs/normal",
              children: t,
            }),
          ],
        });
      }
      function $(e) {
        let { guildId: t } = e,
          l = (0, i.useStateFromStores)([g.default], () => {
            var e;
            return null !== (e = g.default.getMemberCount(t)) && void 0 !== e
              ? e
              : 0;
          }),
          s = E.NotifyFriendsOnGoLive.useSetting(),
          o = a.useCallback((e, t) => {
            E.NotifyFriendsOnGoLive.updateSetting(t),
              O.default.track(z.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
                value: t,
              });
          }, []),
          d = l >= 2 && l <= W.STREAM_NOTIFY_GUILD_MAX_SIZE;
        return d
          ? (0, n.jsx)(u.FormItem, {
              className: r(Q.modalContent, K.checkboxRow),
              children: (0, n.jsx)(u.Checkbox, {
                value: !!s,
                type: u.Checkbox.Types.INVERTED,
                onChange: o,
                children: (0, n.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  children:
                    Y.default.Messages
                      .GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL,
                }),
              }),
            })
          : null;
      }
      function ee(e) {
        let { enabled: t, onChange: l } = e,
          s = a.useCallback(
            (e, t) => {
              l(t);
            },
            [l]
          );
        return (0, n.jsx)(u.FormItem, {
          className: r(Q.modalContent, K.checkboxRow),
          children: (0, n.jsx)(u.Checkbox, {
            value: t,
            type: u.Checkbox.Types.INVERTED,
            onChange: s,
            children: (0, n.jsx)(u.Text, {
              variant: "text-sm/normal",
              children:
                Y.default.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL,
            }),
          }),
        });
      }
      function et(e) {
        let {
            selectedSource: t,
            selectedFPS: l,
            selectedChannelId: s,
            selectedPreset: r,
            selectedResolution: u,
            sourceChanged: d,
            selectedGuildId: C,
            targetGuildPremiumTier: E,
            selectSource: g,
            selectGuild: _,
            sound: v,
            onClose: A,
            onChangeSelectedFPS: T,
            onChangeSelectedResolution: R,
            onChangeSelectedPreset: L,
            onChangeSelectedChannelId: M,
            onChangeSource: j,
            onChangeAudioDevice: O,
            onChangeGuild: D,
            onChangeSound: G,
            isAnimationDone: k,
          } = e,
          B = (0, i.useStateFromStores)([I.default, N.default], () =>
            N.default.getChannel(I.default.getVoiceChannelId())
          ),
          W = (0, i.useStateFromStores)(
            [w.default],
            () => w.default.GPUDriversOutdated
          ),
          Q = (0, i.useStateFromStores)(
            [w.default],
            () => w.default.problematicGPUDriver
          ),
          et = (0, i.useStateFromStores)([x.default], () =>
            x.default.getCurrentUser()
          ),
          el = (0, f.useEnableClips)(),
          en = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
            autoTrackExposure: !el,
          }),
          ea = (0, b.default)();
        null != t &&
          t.id.startsWith("screen") &&
          !p.default.supportsScreenSoundshare() &&
          (ea = Y.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
        let es = el
            ? (0, n.jsx)(S.default, { guildId: C, isAnimationDone: k })
            : en
              ? (0, n.jsx)(m.default, {})
              : void 0,
          er = !!(null == t ? void 0 : t.id.startsWith("camera")),
          ei = null != et && et.verified && !et.bot,
          eu = null != B && !(0, c.isPrivateGuildChannel)(B),
          eo = !(0, i.useStateFromStores)([p.default], () =>
            p.default.getHardwareH264()
          );
        return (0, n.jsxs)(a.Fragment, {
          children: [
            er
              ? (0, n.jsx)(y.default, {
                  selectedSource: t,
                  onChangeVideoDeviceSource: j,
                  onChangeAudioDevice: O,
                })
              : (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(X, {
                      selectSource: g,
                      sourceChanged: d,
                      onChangeSource: j,
                      selectedSource: t,
                    }),
                    null != ea ? (0, n.jsx)(q, { text: ea }) : null,
                    (0, U.isWindows)() &&
                    null != t &&
                    t.id.startsWith("screen") &&
                    null == ea
                      ? (0, n.jsx)(ee, { enabled: v, onChange: G })
                      : null,
                  ],
                }),
            _ && null != C ? (0, n.jsx)(J, { guildId: C, onChange: D }) : null,
            null != B
              ? (0, n.jsx)(H.default, { channel: B })
              : (0, n.jsx)(V.default, {
                  guildId: C,
                  selectedChannelId: s,
                  onChangeSelectedChannelId: M,
                }),
            null != C && ei && eu ? (0, n.jsx)($, { guildId: C }) : null,
            W
              ? (0, n.jsx)(q, {
                  text: Y.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED,
                })
              : null,
            Q
              ? (0, n.jsx)(q, {
                  text: Y.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format(
                    {
                      helpCenterLink: P.default.getArticleURL(
                        z.HelpdeskArticles.NVIDIA_DRIVER_ISSUES
                      ),
                    }
                  ),
                })
              : null,
            eo &&
              (0, n.jsx)(h.default, {
                look: h.InfoBoxLooks.WARNING,
                className: K.hardwareWarning,
                children:
                  Y.default.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format(
                    {
                      onClick: () => {
                        A(),
                          o.default.open(z.UserSettingsSections.VOICE, null, {
                            scrollPosition:
                              Z.UserSettingsScrollPositions
                                .VoiceAndVideoScrollPositions
                                .HARDWARE_ACCELERATION,
                          });
                      },
                    }
                  ),
              }),
            (0, n.jsx)(F.default, {
              selectedPreset: r,
              selectedFPS: l,
              selectedResolution: u,
              targetGuildPremiumTier: E,
              onClose: A,
              onFPSChange: T,
              onResolutionChange: R,
              onPresetChange: L,
              captureDeviceSelected: er,
            }),
            es,
          ],
        });
      }
    },
    273405: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("446674"),
        s = l("77078"),
        r = l("271938"),
        i = l("316133"),
        u = l("379385"),
        o = l("326620"),
        d = l("782340"),
        c = l("961523");
      function f(e) {
        let { channel: t } = e,
          l = (0, a.useStateFromStores)([r.default], () => r.default.getId()),
          f = (0, a.useStateFromStores)(
            [i.default],
            () => i.default.getVoiceStatesForChannel(t),
            [t]
          );
        return (0, n.jsx)(s.FormItem, {
          title: d.default.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
          className: c.modalContent,
          titleClassName: c.formItemTitle,
          children: (0, n.jsx)(o.default, {
            children: (0, n.jsx)(u.default, {
              channel: t,
              users: f
                .filter(e => {
                  let { user: t } = e;
                  return t.id !== l;
                })
                .map(e => {
                  let { user: t } = e;
                  return t;
                }),
            }),
          }),
        });
      }
    },
    321443: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("414456"),
        s = l.n(a),
        r = l("699849");
      function i(e) {
        let { separator: t = !1 } = e;
        return (0, n.jsx)("div", {
          className: s(r.divider, { [r.separator]: t }),
        });
      }
    },
    451863: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return B;
          },
        }),
        l("222007");
      var n,
        a,
        s = l("37983"),
        r = l("884691"),
        i = l("627445"),
        u = l.n(i),
        o = l("146606"),
        d = l("446674"),
        c = l("77078"),
        f = l("404118"),
        m = l("987317"),
        S = l("990766"),
        C = l("901582"),
        E = l("299285"),
        h = l("161454"),
        N = l("928609"),
        g = l("268491"),
        _ = l("42203"),
        p = l("305961"),
        I = l("42887"),
        x = l("18494"),
        v = l("697218"),
        A = l("703370"),
        T = l("145131"),
        R = l("476765"),
        L = l("599110"),
        M = l("773336"),
        j = l("50885"),
        O = l("773356"),
        D = l("7738"),
        P = l("375202"),
        U = l("636909"),
        w = l("934054"),
        G = l("23922"),
        b = l("16750"),
        y = l("686298"),
        V = l("49111"),
        H = l("180524"),
        k = l("782340"),
        F = l("961523");
      ((a = n || (n = {}))[(a.GUILD = 0)] = "GUILD"),
        (a[(a.SOURCE = 1)] = "SOURCE"),
        (a[(a.CONFIRM = 2)] = "CONFIRM");
      function B(e) {
        var t, n, a, i, B;
        let {
            selectGuild: W = !1,
            selectSource: z = !0,
            guildId: Z,
            analyticsLocation: Y,
            onClose: K,
            transitionState: Q,
          } = e,
          {
            preset: X,
            resolution: J,
            fps: q,
            soundshareEnabled: $,
          } = (0, d.useStateFromStoresObject)([g.default], () =>
            g.default.getState()
          ),
          ee = (0, d.useStateFromStores)([x.default, _.default], () =>
            _.default.getChannel(x.default.getVoiceChannelId())
          ),
          et = (0, d.useStateFromStores)([h.default, A.default], () =>
            (0, M.isWindows)() ? (0, P.default)(h.default, A.default) : null
          ),
          el = (0, d.useStateFromStores)([v.default], () => {
            let e = v.default.getCurrentUser();
            return u(null != e, "GoLiveModal: user cannot be undefined"), e;
          }),
          en =
            null !== (t = null == ee ? void 0 : ee.getGuildId()) && void 0 !== t
              ? t
              : Z,
          ea = (0, d.useStateFromStores)([p.default], () => {
            var e;
            return null != en
              ? null === (e = p.default.getGuild(en)) || void 0 === e
                ? void 0
                : e.premiumTier
              : null;
          }),
          [es, er] =
            null !== (n = (0, D.default)(X, el, ea)) && void 0 !== n
              ? n
              : [
                  y.ApplicationStreamResolutions.RESOLUTION_720,
                  y.ApplicationStreamFPS.FPS_30,
                ];
        X !== y.ApplicationStreamPresets.PRESET_CUSTOM && ((J = es), (q = er));
        let ei = (0, R.useUID)();
        let [eu, eo] = r.useState(((i = W), (B = z), i ? 0 : B ? 1 : 2)),
          [ed, ec] = r.useState(null),
          [ef, em] = r.useState(!1),
          [eS, eC] = r.useState(null),
          [eE, eh] = r.useState(null),
          [eN, eg] = r.useState(null),
          [e_, ep] = r.useState(X),
          [eI, ex] = r.useState(J),
          [ev, eA] = r.useState(q),
          [eT, eR] = r.useState($),
          [eL, eM] = r.useState(null != Z ? Z : null),
          ej =
            null !== (a = null == ee ? void 0 : ee.id) && void 0 !== a ? a : eS;
        r.useEffect(() => {
          let e = (0, M.isWindows)()
              ? (0, P.default)(h.default, A.default)
              : null,
            t =
              (null == e ? void 0 : e.id) != null
                ? E.default.getApplication(e.id)
                : null;
          L.default.track(V.AnalyticEvents.OPEN_MODAL, {
            type: "Go Live Modal",
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: Y,
          });
        }, [Y]);
        function eO() {
          !(function () {
            var e, t;
            u(null != et || null != eE, "got nothing to stream");
            let l =
              null !== (e = null == ee ? void 0 : ee.id) && void 0 !== e
                ? e
                : eS;
            u(null != l, "Received null target channel ID");
            let n = _.default.getChannel(l),
              a =
                null !== (t = null == n ? void 0 : n.getGuildId()) &&
                void 0 !== t
                  ? t
                  : Z;
            null == ee && m.default.selectVoiceChannel(l);
            let s = e_,
              r = eI,
              i = ev;
            !(0, O.default)(s, r, i, el, ea) &&
              ((s = y.ApplicationStreamPresets.PRESET_VIDEO),
              (r = y.ApplicationStreamResolutions.RESOLUTION_720),
              (i = y.ApplicationStreamFPS.FPS_30)),
              (0, S.updateStreamSettings)({
                preset: s,
                resolution: r,
                frameRate: i,
                soundshareEnabled: eT,
              });
            let o = (0, b.default)(et, eE, h.default.getRunningGames()),
              d =
                !(0, M.isWindows)() ||
                null == o ||
                (null == eE ? void 0 : eE.id.startsWith("camera:")),
              c = d || null == o ? null : o.pid;
            (0, S.startStream)(a, l, {
              pid: c,
              sourceId: null == c && null != eE ? eE.id : null,
              sourceName: null == c && null != eE ? eE.name : null,
              audioSourceId: eN,
              sound: eT,
            }),
              (async () => {
                let e = await N.default.hasPermission(
                  H.NativePermissionTypes.SCREEN_RECORDING,
                  { showAuthorizationError: !1 }
                );
                !e &&
                  f.default.show({
                    title:
                      k.default.Messages
                        .WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                    body: k.default.Messages
                      .WARNING_SCREEN_RECORDING_PERMISSION_BODY,
                  });
              })();
          })(),
            K();
        }
        let eD = r.useCallback(
          (e, t, l) => {
            let n = (0, D.default)(e, el, ea),
              [a, s] = null != n ? n : [t, l];
            if (
              (e !== e_ && ((t = a), (l = s)), !(0, O.default)(e, t, l, el, ea))
            ) {
              let [e, n] = (0, D.default)(
                y.ApplicationStreamPresets.PRESET_VIDEO,
                el,
                ea
              );
              (t = e), (l = n);
            }
            l !== ev && eA(l),
              t !== eI && ex(t),
              a !== t || s !== l
                ? ep(y.ApplicationStreamPresets.PRESET_CUSTOM)
                : e !== e_ && ep(e);
          },
          [el, ea, ev, eI, e_]
        );
        async function eP(e) {
          if ((e.preventDefault(), 1 === eu)) return eo(2);
          let t = (0, b.default)(et, eE, h.default.getRunningGames()),
            n =
              j.default.supportsFeature(V.NativeFeatures.ELEVATED_HOOK) &&
              (null == t ? void 0 : t.elevated);
          if ((0, M.isMac)() && null != eE) {
            let e = await I.default.getMediaEngine().getDesktopSources(),
              t = eE.id;
            if (
              t.startsWith("screen") &&
              e.length > 0 &&
              !e.some(e => e.includes(t))
            ) {
              var a, r;
              (a = t),
                (r = e),
                L.default.track(V.AnalyticEvents.SCREENSHARE_FAILED, {
                  source_id: a,
                  screens: r.length,
                }),
                (0, c.openModal)(e =>
                  (0, s.jsx)(c.ConfirmModal, {
                    header: k.default.Messages.SCREENSHARE_RELAUNCH,
                    confirmText: k.default.Messages.OKAY,
                    cancelText: k.default.Messages.CANCEL,
                    onConfirm: () => j.default.relaunch(),
                    ...e,
                    children: (0, s.jsx)(c.Text, {
                      variant: "text-md/normal",
                      children: k.default.Messages.SCREENSHARE_RELAUNCH_BODY,
                    }),
                  })
                );
              return;
            }
          }
          n
            ? !(function () {
                var e;
                let t =
                  null !== (e = null == et ? void 0 : et.pid) && void 0 !== e
                    ? e
                    : null;
                (0, c.openModalLazy)(async () => {
                  let { default: e } = await l
                    .el("426319")
                    .then(l.bind(l, "426319"));
                  return l => (0, s.jsx)(e, { ...l, handleStream: eO, pid: t });
                });
              })()
            : eO();
        }
        let eU = r.useCallback(e => {
            eh(e), null != e && (eo(2), em(!0));
          }, []),
          ew = r.useCallback(
            e => {
              eM(e), eo(z ? 1 : 2);
            },
            [z]
          ),
          eG = (function (e) {
            switch (e) {
              case 1:
                return k.default.Messages
                  .GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
              case 2:
                return null;
              default:
                return k.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
          })(eu),
          eb = (0, s.jsx)(c.ModalHeader, {
            className: F.modalHeader,
            separator: !1,
            children: (0, s.jsxs)(T.default, {
              direction: T.default.Direction.VERTICAL,
              align: T.default.Align.CENTER,
              className: F.header,
              children: [
                (0, s.jsx)(c.Heading, {
                  variant: "heading-xl/semibold",
                  id: ei,
                  className: F.headerText,
                  children: k.default.Messages.GO_LIVE_MODAL_TITLE,
                }),
                null != eG
                  ? (0, s.jsx)(c.Text, {
                      className: F.headerDescription,
                      variant: "text-md/normal",
                      color: "text-normal",
                      children: eG,
                    })
                  : null,
              ],
            }),
          }),
          ey = (0, s.jsxs)(c.Slides, {
            springConfig: { ...o.config.stiff, clamp: !0 },
            activeSlide: eu,
            width: 480,
            onSlideReady: ec,
            children: [
              (0, s.jsx)(c.Slide, {
                id: 0,
                children: (0, s.jsx)("div", {
                  className: F.modalSize,
                  children: (0, s.jsx)(w.default, { onSelectGuild: ew }),
                }),
              }),
              (0, s.jsx)(c.Slide, {
                id: 1,
                children: (0, s.jsx)("div", {
                  className: F.modalSize,
                  children: (0, s.jsx)(G.default, {
                    selectedSource: eE,
                    onChangeSelectedSource: eU,
                  }),
                }),
              }),
              (0, s.jsx)(c.Slide, {
                id: 2,
                children: (0, s.jsx)("div", {
                  className: F.modalSize,
                  children: (0, s.jsx)(U.default, {
                    selectedChannelId: eS,
                    selectedPreset: e_,
                    selectedResolution: eI,
                    selectedSource: eE,
                    selectedFPS: ev,
                    sound: eT,
                    sourceChanged: ef,
                    selectSource: z,
                    onChangeSelectedFPS: e => eD(e_, eI, e),
                    onChangeSelectedResolution: e => eD(e_, e, ev),
                    onChangeSelectedPreset: e => eD(e, eI, ev),
                    onChangeSelectedChannelId: eC,
                    onChangeSelectedSource: eU,
                    onChangeSource: () => eo(1),
                    onChangeAudioDevice: e => eg(e),
                    onChangeGuild: () => eo(0),
                    onChangeSound: e => eR(e),
                    onClose: K,
                    selectedGuildId: eL,
                    targetGuildPremiumTier: ea,
                    selectGuild: W,
                    isAnimationDone:
                      2 === ed && Q === c.ModalTransitionState.ENTERED,
                  }),
                }),
              }),
            ],
          }),
          eV = (function (e, t, l, n) {
            switch (e) {
              case 1:
                return t ? 0 : null;
              case 2:
                if (n) return 1;
                if (!l && t) return 0;
                return null;
              default:
                return null;
            }
          })(eu, W, z, ef),
          eH = 2 !== eu || (null == eE && null == et) || null == ej,
          ek = (0, s.jsxs)(c.ModalFooter, {
            justify:
              null == eV ? T.default.Justify.START : T.default.Justify.BETWEEN,
            children: [
              (0, s.jsx)(c.Button, {
                type: "submit",
                size: c.Button.Sizes.SMALL,
                disabled: eH,
                autoFocus: !0,
                children: k.default.Messages.GO_LIVE_MODAL_CTA,
              }),
              null == eV
                ? (0, s.jsx)(c.Button, {
                    className: F.cancelButton,
                    look: c.Button.Looks.LINK,
                    size: c.Button.Sizes.SMALL,
                    color: c.ButtonColors.PRIMARY,
                    onClick: K,
                    children: k.default.Messages.CANCEL,
                  })
                : (0, s.jsx)(c.Button, {
                    size: c.Button.Sizes.SMALL,
                    color: c.ButtonColors.PRIMARY,
                    onClick: () => eo(eV),
                    children: k.default.Messages.BACK,
                  }),
            ],
          });
        return (0, s.jsx)(C.default, {
          page: V.AnalyticsPages.GO_LIVE_MODAL,
          children: (0, s.jsxs)(c.ModalRoot, {
            "aria-labelledby": ei,
            transitionState: Q,
            size: c.ModalSize.DYNAMIC,
            className: F.modalSize,
            children: [
              (0, s.jsx)(c.ModalCloseButton, {
                onClick: K,
                className: F.modalCloseButton,
              }),
              (0, s.jsx)("div", { className: F.art }),
              (0, s.jsxs)("form", { onSubmit: eP, children: [eb, ey, ek] }),
            ],
          }),
        });
      }
    },
    934054: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return I;
          },
        }),
        l("881410");
      var n = l("37983");
      l("884691");
      var a = l("414456"),
        s = l.n(a),
        r = l("917351"),
        i = l.n(r),
        u = l("446674"),
        o = l("77078"),
        d = l("923959"),
        c = l("305961"),
        f = l("957255"),
        m = l("677099"),
        S = l("476263"),
        C = l("461380"),
        E = l("223913"),
        h = l("644169"),
        N = l("782340"),
        g = l("961523"),
        _ = l("206464");
      function p(e) {
        let { guildId: t, onClick: l } = e,
          a = (0, u.useStateFromStores)([c.default], () =>
            c.default.getGuild(t)
          ),
          s = (0, u.useStateFromStores)([d.default, c.default, f.default], () =>
            d.default.getChannels(t)[d.GUILD_VOCAL_CHANNELS_KEY].some(e => {
              let { channel: t } = e;
              return (0, E.canStreamInChannel)(t, c.default, f.default);
            })
          );
        return null != a && s
          ? (0, n.jsxs)(o.Clickable, {
              onClick: () => l(t),
              className: _.guildRow,
              children: [
                (0, n.jsx)(S.default, {
                  guild: a,
                  size: S.default.Sizes.SMALL,
                  className: _.guildIcon,
                }),
                (0, n.jsx)(o.Text, {
                  variant: "text-md/normal",
                  className: _.guildName,
                  children: a.toString(),
                }),
                (0, n.jsx)(C.default, {
                  direction: C.default.Directions.RIGHT,
                  className: _.guildArrow,
                }),
              ],
            })
          : null;
      }
      function I(e) {
        let { onSelectGuild: t } = e,
          l = (0, u.useStateFromStores)([m.default], () =>
            m.default.getGuildFolders()
          );
        return (0, n.jsx)(h.default, {
          title: N.default.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
          scrollerClassName: s(_.guildScroller, g.marginBottom),
          children: i.flatMap(l, e => {
            let { guildIds: l } = e;
            return l.map(e => (0, n.jsx)(p, { guildId: e, onClick: t }, e));
          }),
        });
      }
    },
    379385: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("414456"),
        s = l.n(a),
        r = l("77078"),
        i = l("679653"),
        u = l("619335"),
        o = l("811305"),
        d = l("387111"),
        c = l("782340"),
        f = l("275811");
      function m(e) {
        let { channel: t, users: l, selected: a = !1 } = e,
          m = (0, i.default)(t),
          S = null;
        null != l &&
          l.length > 0 &&
          (S = (0, n.jsx)(o.default, {
            guildId: t.guild_id,
            className: f.voiceUserList,
            users: l,
            renderUser: e => {
              if (null == e) return null;
              let l = d.default.getName(t.guild_id, t.id, e),
                a = e.getAvatarURL(t.guild_id, 24);
              return (0, n.jsx)(r.TooltipContainer, {
                text: l,
                children: (0, n.jsx)("img", {
                  src: null != a ? a : void 0,
                  "aria-label": e.username,
                  alt: "",
                  className: f.avatar,
                }),
              });
            },
            renderMoreUsers: e => {
              let a = l.slice(4),
                s = (function (e, t) {
                  let l = t.id,
                    n = t.guild_id;
                  return e.length <= 1
                    ? null
                    : 2 === e.length
                      ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format(
                          {
                            nickname0: d.default.getName(n, l, e[0]),
                            nickname1: d.default.getName(n, l, e[1]),
                          }
                        )
                      : 3 === e.length
                        ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format(
                            {
                              nickname0: d.default.getName(n, l, e[0]),
                              nickname1: d.default.getName(n, l, e[1]),
                              nickname2: d.default.getName(n, l, e[2]),
                            }
                          )
                        : c.default.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format(
                            {
                              nickname0: d.default.getName(n, l, e[0]),
                              nickname1: d.default.getName(n, l, e[1]),
                              remainingCount: e.length - 2,
                            }
                          );
                })(a, t);
              return (0, n.jsx)("div", {
                children: (0, n.jsx)(r.TooltipContainer, {
                  text: s,
                  children: (0, n.jsx)("div", {
                    className: f.userListOverflow,
                    children: e,
                  }),
                }),
              });
            },
            max: 5,
            showUserPopout: !1,
          }));
        let C = (0, u.default)(t);
        return (0, n.jsxs)("div", {
          className: s(f.channelInfo, { [f.selected]: a }),
          children: [
            (0, n.jsx)(C, { className: f.channelIcon }),
            (0, n.jsx)("div", { className: f.channelName, children: m }),
            S,
          ],
        });
      }
    },
    326620: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("891901");
      function s(e) {
        let { children: t } = e;
        return (0, n.jsx)("div", { className: a.card, children: t });
      }
    },
    644169: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        r = l.n(s),
        i = l("77078"),
        u = l("321443"),
        o = l("961523"),
        d = l("351202");
      function c(e) {
        let {
            title: t,
            scrollerClassName: l,
            scrollerInnerClassName: s,
            children: c,
          } = e,
          f = a.useRef(null),
          [m, S] = a.useState(!1),
          [C, E] = a.useState(!1),
          h = a.useCallback(() => {
            let { current: e } = f;
            null != e && (S(!e.isScrolledToTop()), E(!e.isScrolledToBottom()));
          }, []);
        return (
          a.useLayoutEffect(() => h(), []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: r(d.title, d.scrollWrapper),
                children: [
                  (0, n.jsx)(i.FormTitle, {
                    className: o.formItemTitle,
                    children: t,
                  }),
                  (0, n.jsx)(u.default, { separator: m }),
                ],
              }),
              (0, n.jsx)("div", {
                className: l,
                children: (0, n.jsx)(i.AdvancedScroller, {
                  ref: f,
                  className: r(d.scrollerInner, s, { [d.bottomSeparator]: C }),
                  onScroll: h,
                  children: c,
                }),
              }),
            ],
          })
        );
      }
    },
    23922: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return G;
          },
        }),
        l("222007"),
        l("311790"),
        l("477657"),
        l("811875"),
        l("90301"),
        l("652153"),
        l("28797"),
        l("817884"),
        l("597349"),
        l("667536"),
        l("690341"),
        l("492311"),
        l("101997"),
        l("424973");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        r = l.n(s),
        i = l("723251"),
        u = l("771281"),
        o = l("446674"),
        d = l("351720"),
        c = l("862337"),
        f = l("77078"),
        m = l("823411"),
        S = l("161454"),
        C = l("374023"),
        E = l("2973"),
        h = l("227231"),
        N = l("277057"),
        g = l("42887"),
        _ = l("703370"),
        p = l("145131"),
        I = l("162933"),
        x = l("773336"),
        v = l("301834"),
        A = l("756898"),
        T = l("375202"),
        R = l("321443"),
        L = l("444276"),
        M = l("166604"),
        j = l("353927"),
        O = l("782340"),
        D = l("142716");
      async function P() {
        let e = g.default.getVideoDevices(),
          t = (0, d.default)(
            g.default.getMediaEngine(),
            [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN],
            { width: 176, height: 99 }
          ),
          l = U(),
          n = await l,
          a = await t,
          s = a.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
          r = (function (e, t) {
            let l = {};
            return (
              t.forEach(e => {
                l[e.id] = e;
              }),
              e.forEach(e => {
                l[e.id] = e;
              }),
              Object.values(l)
            );
          })(
            a.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)),
            n
          ),
          o = [
            "GQgGHISKZ5aYqYeYhX9isDUHGw",
            "bAgKFITWhoVvmHVRuokCdjVQaA",
            "XAgGDIJ/ipadd3iCiYUcWpCZBA",
            "HRkGDIT5aXRneomGdlvUawB7qA",
            "I9gNDISmlqqPmHiKd3isTp/5lg",
            "XxgGBIIwT2ZGpneUeZev6fWLXQ",
            "KzsKNIZDeYmfd3ihe1bXfr8Jxg",
            "J9cRDIJ6iHd/d4h4eIUJf5LyRw",
            "DggKFIQwtndKe3hVfXnAWQmddQ",
            "WggKDILeh3ePZpd6l4jln1b5SQ",
            "4PgJJIJVl3eAaod2iJeHj7tE8Q",
          ],
          c = Object.entries(e)
            .filter(e => {
              let [t, l] = e;
              return !l.disabled;
            })
            .map((e, t) => {
              let [l, n] = e,
                a = o[t % o.length],
                s = Uint8Array.from(atob(a), e => e.charCodeAt(0)),
                r = (0, i.thumbHashToDataURL)(s);
              return { id: "camera:" + n.id, name: n.name, url: r };
            });
        return { windowSources: r, screenSources: s, cameraSources: c };
      }
      async function U() {
        let e = S.default.getRunningGames(),
          t = await Promise.all(
            e.map(async e => {
              let t;
              if (null == e.name) return null;
              try {
                t = await m.default.identifyGame(e.pid, e.name);
              } catch (e) {
                return null;
              }
              let l = e.windowHandle,
                n = e.name,
                a = t.icon;
              return null != l && null != n && null != a
                ? {
                    id: "window:".concat(l),
                    name: n,
                    url: "data:image/bmp;base64,".concat(a),
                  }
                : null;
            })
          );
        return t.filter(e => null !== e);
      }
      function w(e) {
        let t = (0, x.isWindows)()
            ? (0, T.default)(S.default, _.default)
            : null,
          l = S.default.getRunningGames();
        return null != t && (0, A.default)(e.id, t.windowHandle)
          ? 2
          : null != l.find(t => (0, A.default)(e.id, t.windowHandle))
            ? 1
            : 0;
      }
      function G(e) {
        let { selectedSource: t, onChangeSelectedSource: l } = e,
          { enableGoLiveCaptureCard: s } = v.default.useExperiment({
            location: "GoLive_Source_Select",
          }),
          i = g.default.supports(j.Features.GO_LIVE_HARDWARE),
          [d, m] = a.useState(null),
          [_, x] = a.useState(null),
          [T, U] = a.useState(null),
          G = null != T && T.length > 0,
          [b, y] = a.useState(u.DesktopSources.WINDOW),
          [V, H] = a.useState(!1),
          k = a.useRef(null),
          F = a.useRef(new c.Interval()),
          B = (0, o.useStateFromStores)([S.default], () =>
            S.default.getRunningGames()
          ),
          W = (0, o.useStateFromStores)([E.default], () => E.default.quests),
          z = (function (e, t, l) {
            let n = (0, C.useIsEligibleForQuests)({
              location: M.QuestsExperimentLocations.STREAM_SOURCE_SELECT,
            });
            return a.useMemo(() => {
              if (null == l || !n) return null;
              for (let n of l) {
                var a, s;
                let l = t.find(e => (0, A.default)(n.id, e.windowHandle));
                if ((null == l ? void 0 : l.id) == null) continue;
                let r = (0, h.getQuestByApplicationId)(e, l.id);
                if (
                  null != r &&
                  (null === (a = r.userStatus) || void 0 === a
                    ? void 0
                    : a.enrolledAt) != null &&
                  (null === (s = r.userStatus) || void 0 === s
                    ? void 0
                    : s.completedAt) == null
                )
                  return { source: n, quest: r };
              }
              return null;
            }, [n, e, t, l]);
          })(W, B, _),
          Z = a.useMemo(
            () =>
              null == _
                ? null
                : [..._].sort((e, t) =>
                    (null == z ? void 0 : z.source.id) === e.id
                      ? -1
                      : (null == z ? void 0 : z.source.id) === t.id
                        ? 1
                        : w(t) - w(e)
                  ),
            [z, _]
          );
        a.useEffect(() => {
          let e = F.current;
          return (
            P().then(e => {
              let { screenSources: t, windowSources: l, cameraSources: n } = e;
              m(t), x(l), U(n);
            }),
            e.start(1e3, async () => {
              let {
                screenSources: e,
                windowSources: t,
                cameraSources: l,
              } = await P();
              m(e), x(t), U(l);
            }),
            () => {
              e.stop();
            }
          );
        }, []);
        let Y = a.useCallback(e => {
            if (null !== e) {
              var t;
              (k.current = e), H(((t = !e.isScrolledToTop()), t));
            }
          }, []),
          K = (function (e) {
            switch (e) {
              case u.DesktopSources.WINDOW:
                return Z;
              case u.DesktopSources.SCREEN:
                return d;
              case u.DesktopSources.CAMERA:
                return T;
            }
          })(b);
        if (null == K)
          return (0, n.jsx)(p.default, {
            className: D.spinner,
            justify: p.default.Justify.CENTER,
            align: p.default.Align.CENTER,
            children: (0, n.jsx)(f.Spinner, {}),
          });
        let Q = K.map(e => {
          let { id: a } = e,
            s = (null == t ? void 0 : t.id) === a;
          return (0, n.jsx)(
            f.Clickable,
            {
              className: r(D.tile, { [D.selected]: s }),
              onClick: () => l(e, null),
              children: (0, n.jsx)(
                L.default,
                { source: e, selectedSource: t },
                e.id
              ),
            },
            a
          );
        });
        function X() {
          let e = k.current;
          null != e && H(!e.isScrolledToTop());
        }
        return (0, n.jsxs)(a.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: D.segmentContainer,
              children: [
                (0, n.jsx)(R.default, { separator: V }),
                (0, n.jsx)(f.SegmentedControl, {
                  options: (function () {
                    let e = [
                      {
                        name: O.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
                        value: u.DesktopSources.WINDOW,
                      },
                      {
                        name: O.default.Messages.GO_LIVE_MODAL_SCREENS,
                        value: u.DesktopSources.SCREEN,
                      },
                    ];
                    return (
                      s &&
                        i &&
                        G &&
                        e.push({
                          name: O.default.Messages.GO_LIVE_MODAL_CAPTURE,
                          value: u.DesktopSources.CAMERA,
                        }),
                      e
                    );
                  })(),
                  value: b,
                  onChange: e => {
                    let { value: t } = e;
                    return y(t);
                  },
                  className: D.segmentControl,
                  optionClassName: D.segmentControlOption,
                }),
              ],
            }),
            b === u.DesktopSources.CAMERA
              ? (0, n.jsx)("div", {
                  className: D.sourceContainer,
                  children: (0, n.jsx)(f.AdvancedScroller, {
                    ref: Y,
                    className: D.sourceScroller,
                    onScroll: X,
                    children: (0, n.jsx)(I.default, {
                      layout: I.default.Layout.WRAP,
                      columns: 2,
                      className: D.sourceContainer,
                      children: Q,
                    }),
                  }),
                })
              : (0, n.jsxs)(f.AdvancedScroller, {
                  ref: Y,
                  className: D.sourceScroller,
                  onScroll: X,
                  children: [
                    b === u.DesktopSources.WINDOW &&
                      null != z &&
                      (0, n.jsx)(N.default, { quest: z.quest }),
                    (0, n.jsx)(I.default, {
                      layout: I.default.Layout.WRAP,
                      columns: 2,
                      className: D.sourceContainer,
                      children: Q,
                    }),
                  ],
                }),
          ],
        });
      }
    },
    444276: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("414456"),
        s = l.n(a),
        r = l("77078"),
        i = l("145131"),
        u = l("142716");
      function o(e) {
        let { source: t, selectedSource: l } = e,
          { id: a, name: o, url: d } = t,
          c = (null == l ? void 0 : l.id) === a;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(i.default, {
            direction: i.default.Direction.VERTICAL,
            justify: i.default.Justify.CENTER,
            align: i.default.Align.CENTER,
            children: [
              (0, n.jsx)(i.default, {
                justify: i.default.Justify.CENTER,
                align: i.default.Align.CENTER,
                children: (0, n.jsx)("div", {
                  style: { backgroundImage: "url(".concat(d, ")") },
                  className: s(u.sourceThumbnail, { [u.selected]: c }),
                }),
              }),
              (0, n.jsx)(r.Text, {
                className: s(u.sourceName, { [u.selected]: c }),
                variant: "text-sm/normal",
                children: o,
              }),
            ],
          }),
        });
      }
    },
    985997: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return O;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        r = l.n(s),
        i = l("627445"),
        u = l.n(i),
        o = l("446674"),
        d = l("77078"),
        c = l("901582"),
        f = l("997289"),
        m = l("56947"),
        S = l("688771"),
        C = l("697218"),
        E = l("140848"),
        h = l("145131"),
        N = l("216422"),
        g = l("719923"),
        _ = l("773356"),
        p = l("480862"),
        I = l("686298"),
        x = l("49111"),
        v = l("782340"),
        A = l("961523"),
        T = l("547834"),
        R = l("890957");
      function L(e) {
        let { analyticsLocation: t, onClose: a } = e;
        (0, d.openModalLazy)(async () => {
          let { default: e } = await l.el("754534").then(l.bind(l, "754534"));
          return l =>
            (0, n.jsx)(e, { ...l, onCloseParent: a, analyticsSource: t });
        });
      }
      function M() {
        return (0, n.jsxs)("div", {
          className: T.toolTipTextContainer,
          children: [
            (0, n.jsx)(N.default, { className: r(T.premiumIcon) }),
            (0, n.jsx)(d.Text, {
              className: T.upsellText,
              variant: "text-sm/medium",
              children: v.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
            }),
          ],
        });
      }
      function j(e) {
        let t,
          l,
          {
            type: a,
            selected: s,
            needsPremium: i,
            analyticsLocation: u,
            useGradient: o = !1,
            onClick: c,
            onClose: f,
            setIsHovering: m,
          } = e,
          { value: S, label: C } = a;
        return (
          i
            ? ((t = (0, n.jsx)(d.TooltipContainer, {
                tooltipClassName: T.tooltip,
                spacing: 12,
                "aria-label":
                  v.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
                text: (0, n.jsx)(M, {}),
                children: (0, n.jsx)(h.default, {
                  align: h.default.Align.CENTER,
                  onMouseEnter: () => m(!0),
                  onMouseLeave: () => m(!1),
                  children: (0, n.jsx)(d.Text, {
                    variant: "text-xs/bold",
                    className: r(T.selectorNitroText, {
                      [T.enhancedSelectorNitroText]: o,
                    }),
                    children: C,
                  }),
                }),
              })),
              (l = () => L({ analyticsLocation: u, onClose: f })))
            : ((t = (0, n.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: s ? T.selectorTextSelected : T.selectorText,
                children: C,
              })),
              (l = () => c(S))),
          {
            content: t,
            className: r(s ? T.selectorButtonSelected : T.selectorButton, {
              [T.selectorButtonPremiumRequired]: i,
            }),
            onClick: l,
          }
        );
      }
      function O(e) {
        let {
            onClose: t,
            selectedPreset: l,
            selectedResolution: s,
            selectedFPS: r,
            onResolutionChange: i,
            onFPSChange: N,
            onPresetChange: M,
            targetGuildPremiumTier: O,
            captureDeviceSelected: D,
          } = e,
          P = (0, o.useStateFromStores)([C.default], () => {
            let e = C.default.getCurrentUser();
            return u(null != e, "StreamSettings: user cannot be undefined"), e;
          }),
          U = g.default.canStreamQuality(g.StreamQuality.MID, P),
          { location: w } = (0, f.useAnalyticsContext)(),
          G = (0, m.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
            autoTrackExposure: !1,
          }),
          b = !U && !G,
          { enabled: y, variant: V } = S.default.useExperiment(
            { location: "StreamSettingsUpsellBanner" },
            { autoTrackExposure: b }
          ),
          H = y && S.GradientVariants.includes(V),
          [k, F] = a.useState(!1),
          B = D
            ? I.GoLiveDeviceResolutionButtons
            : I.ApplicationStreamResolutionButtons,
          W = { ...w, section: x.AnalyticsSections.STREAM_SETTINGS },
          z = (0, n.jsx)(E.default, {
            buttons: B.map(e =>
              j({
                type: e,
                selected: e.value === s,
                needsPremium: !(0, _.default)(l, e.value, r, P, O),
                analyticsLocation: W,
                useGradient: H,
                onClick: () => i(e.value),
                onClose: t,
                setIsHovering: F,
              })
            ),
          }),
          Z = (0, n.jsx)(E.default, {
            buttons: I.ApplicationStreamFPSButtons.map(e =>
              j({
                type: e,
                selected: e.value === r,
                needsPremium: !(0, _.default)(l, s, e.value, P, O),
                analyticsLocation: W,
                useGradient: H,
                onClick: () => N(e.value),
                onClose: t,
                setIsHovering: F,
              })
            ),
          }),
          Y = [
            {
              value: I.ApplicationStreamPresets.PRESET_VIDEO,
              label: v.default.Messages.STREAM_PRESET_VIDEO,
            },
            ...(D
              ? []
              : [
                  {
                    value: I.ApplicationStreamPresets.PRESET_DOCUMENTS,
                    label: v.default.Messages.STREAM_PRESET_DOCUMENTS,
                  },
                ]),
            {
              value: I.ApplicationStreamPresets.PRESET_CUSTOM,
              label: v.default.Messages.STREAM_PRESET_CUSTOM,
            },
          ],
          K =
            l === I.ApplicationStreamPresets.PRESET_DOCUMENTS
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(h.default, {
                      children: (0, n.jsx)(d.FormItem, {
                        title: v.default.Messages.STREAM_RESOLUTION,
                        titleClassName: A.formItemTitleSlim,
                        className: T.documentModeGroup,
                        children: (0, n.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          children:
                            v.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format(
                              { fps: r }
                            ),
                        }),
                      }),
                    }),
                    b
                      ? (0, n.jsx)(p.default, {
                          message:
                            v.default.Messages
                              .STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                          onClose: t,
                          openStreamUpsellModal: L,
                        })
                      : null,
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)(h.default, {
                      children: [
                        (0, n.jsx)(d.FormItem, {
                          title: v.default.Messages.STREAM_RESOLUTION,
                          className: T.settingsGroup,
                          titleClassName: A.formItemTitleSlim,
                          children: z,
                        }),
                        (0, n.jsx)(d.FormItem, {
                          title: v.default.Messages.SCREENSHARE_FRAME_RATE,
                          className: T.settingsGroup,
                          titleClassName: A.formItemTitleSlim,
                          children: Z,
                        }),
                      ],
                    }),
                    b
                      ? (0, n.jsx)(p.default, {
                          onClose: t,
                          openStreamUpsellModal: L,
                          glow: k && H,
                        })
                      : null,
                  ],
                });
        return (0, n.jsx)(c.default, {
          ...W,
          children: (0, n.jsx)(d.FormItem, {
            title: v.default.Messages.STREAM_QUALITY,
            titleClassName: A.formItemTitle,
            className: A.modalContent,
            children: (0, n.jsxs)("div", {
              className: T.qualitySettingsContainer,
              children: [
                (0, n.jsx)(d.SingleSelect, {
                  value: l,
                  className: R.marginTop8,
                  options: Y,
                  onChange: e => M(e),
                }),
                K,
              ],
            }),
          }),
        });
      }
    },
    480862: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return C;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("414456"),
        s = l.n(a),
        r = l("77078"),
        i = l("688771"),
        u = l("635956"),
        o = l("791106"),
        d = l("216422"),
        c = l("49111"),
        f = l("646718"),
        m = l("782340"),
        S = l("863782");
      function C(e) {
        let {
            message: t,
            onClose: l,
            openStreamUpsellModal: a,
            glow: C = !1,
          } = e,
          { enabled: E, variant: h } = i.default.useExperiment(
            { location: "StreamSettingsUpsellBanner" },
            { autoTrackExposure: !0 }
          ),
          N = E && i.GradientVariants.includes(h),
          g =
            E &&
            [
              i.EnhancedHDStreamingRoadblockVariants.VARIANT_1A,
              i.EnhancedHDStreamingRoadblockVariants.VARIANT_1B,
            ].includes(h),
          _ = {
            section: c.AnalyticsSections.STREAM_SETTINGS,
            object: c.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
            objectType: c.AnalyticsObjectTypes.BUY,
          },
          p = () =>
            (0, n.jsx)(u.default, {
              className: s(S.enhancedCTA, { [S.ctaGradientBackground]: N }),
              iconClassName: S.premiumIcon,
              subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
              buttonText: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
              size: r.Button.Sizes.TINY,
              premiumModalAnalyticsLocation: _,
            });
        return E
          ? (0, n.jsxs)("div", {
              className: s(S.upsellBanner, S.enhancedBanner, {
                [S.gradientGlow]: C,
              }),
              children: [
                (0, n.jsxs)("div", {
                  className: S.iconTextContainer,
                  children: [
                    (0, n.jsx)(d.default, {
                      color: o.GradientCssUrls.PREMIUM_TIER_2,
                    }),
                    (0, n.jsx)(r.Text, {
                      variant: "text-sm/medium",
                      className: s(S.upsellText, S.enhancedUpsellText),
                      children:
                        null != t
                          ? t
                          : g
                            ? m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_V2
                            : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V2.format(
                                {
                                  onClick: () =>
                                    a({ analyticsLocation: _, onClose: l }),
                                }
                              ),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: S.enhancedCTAs,
                  children: g
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(r.Button, {
                            className: s(S.enhancedCTA, S.learnMoreCTA),
                            color: N
                              ? r.Button.Colors.CUSTOM
                              : r.Button.Colors.TRANSPARENT,
                            onClick: () =>
                              a({ analyticsLocation: _, onClose: l }),
                            look: r.Button.Looks.OUTLINED,
                            size: r.Button.Sizes.TINY,
                            children: m.default.Messages.LEARN_MORE,
                          }),
                          p(),
                        ],
                      })
                    : p(),
                }),
              ],
            })
          : (0, n.jsxs)(r.Clickable, {
              onClick: () => a({ analyticsLocation: _, onClose: l }),
              className: s(S.upsellBanner, S.gradientBackground),
              children: [
                (0, n.jsxs)("div", {
                  className: S.iconTextContainer,
                  children: [
                    (0, n.jsx)(d.default, { className: S.iconColor }),
                    (0, n.jsx)(r.Text, {
                      variant: "text-sm/medium",
                      className: S.upsellText,
                      children:
                        null != t
                          ? t
                          : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER,
                    }),
                  ],
                }),
                (0, n.jsx)(r.Text, {
                  variant: "text-sm/medium",
                  className: S.textLink,
                  children: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
                }),
              ],
            });
      }
    },
    32649: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return a;
          },
        }),
        l("222007");
      var n = l("42887");
      function a() {
        let e = n.default.getVideoDevices(),
          t = Object.entries(e).map(e => {
            let [t, l] = e;
            return { id: "camera:" + l.id, name: l.name, url: "" };
          });
        return t;
      }
    },
    16750: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return a;
          },
        });
      var n = l("756898");
      function a(e, t, l) {
        return null == t
          ? e
          : l.find(e => (0, n.default)(t.id, e.windowHandle));
      }
    },
    277057: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("77078"),
        s = l("227231"),
        r = l("782340"),
        i = l("790578"),
        u = function (e) {
          let { quest: t } = e;
          return (0, n.jsx)("div", {
            className: i.wrapper,
            children: (0, n.jsxs)("div", {
              className: i.content,
              children: [
                (0, n.jsx)("img", {
                  src: (0, s.getGameTileAssetUrl)(t),
                  alt: "",
                  className: i.gameTile,
                }),
                (0, n.jsxs)("div", {
                  className: i.copy,
                  children: [
                    (0, n.jsx)(a.Heading, {
                      color: "always-white",
                      variant: "text-sm/medium",
                      children:
                        r.default.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format(
                          { gameTitle: t.config.messages.gameTitle }
                        ),
                    }),
                    (0, n.jsx)(a.Text, {
                      className: i.subheading,
                      color: "always-white",
                      variant: "text-xs/medium",
                      children:
                        r.default.Messages
                          .QUESTS_STREAM_SOURCE_SELECT_NOTICE_SUBHEADING,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    216503: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          InfoBoxLooks: function () {
            return a;
          },
          default: function () {
            return S;
          },
        });
      var n,
        a,
        s = l("37983");
      l("884691");
      var r = l("414456"),
        i = l.n(r),
        u = l("77078"),
        o = l("266926"),
        d = l("423487"),
        c = l("235464");
      ((n = a || (a = {})).INFO = "info"), (n.WARNING = "warning");
      let f = { info: c.info, warning: c.warning },
        m = { info: o.default, warning: d.default };
      function S(e) {
        let { children: t, className: l, look: n = "info" } = e,
          a = m[n];
        return (0, s.jsxs)("div", {
          className: i(c.root, l, f[n]),
          children: [
            (0, s.jsx)(a, { className: c.icon }),
            (0, s.jsx)(u.Text, {
              className: c.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: t,
            }),
          ],
        });
      }
    },
    140848: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("414456"),
        s = l.n(a),
        r = l("77078"),
        i = l("755031");
      let u = e => {
        let { data: t, disabled: l } = e,
          { content: a, className: u, onClick: o, disabled: d } = t;
        return (0, n.jsx)(r.FocusRing, {
          children: (0, n.jsx)("button", {
            type: "button",
            className: s(i.item, u),
            onClick: o,
            disabled: l || d,
            children: a,
          }),
        });
      };
      var o = e => {
        let { buttons: t, disabled: l, className: a } = e;
        return (0, n.jsx)("div", {
          role: "group",
          className: s(i.group, a),
          children: t.map((e, t) => (0, n.jsx)(u, { data: e, disabled: l }, t)),
        });
      };
    },
    162933: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var n,
        a,
        s = l("37983"),
        r = l("884691"),
        i = l("414456"),
        u = l.n(i),
        o = l("145131"),
        d = l("839901");
      ((n = a || (a = {})).WRAP = "wrap"), (n.STACK = "stack");
      class c extends r.PureComponent {
        renderChildren() {
          let e;
          let { children: t, layout: l, columns: n } = this.props;
          switch (l) {
            case "stack":
              e = "100%";
              break;
            case "wrap":
              e = "".concat((1 / n) * 100, "%");
          }
          return t.map((t, l) =>
            (0, s.jsx)(
              o.default.Child,
              { className: d.tile, basis: e, grow: 0, children: t },
              l
            )
          );
        }
        render() {
          let { className: e } = this.props;
          return (0, s.jsx)(o.default, {
            className: u(e, d.grid),
            wrap: o.default.Wrap.WRAP,
            children: this.renderChildren(),
          });
        }
      }
      (c.Layout = a),
        (c.defaultProps = { children: [], layout: "wrap", columns: 4 });
      var f = c;
    },
    266926: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("469563"),
        s = l("225389"),
        r = l("75196"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              backgroundColor: s,
              ...i
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                null != s
                  ? (0, n.jsx)("circle", { r: 8, cx: 12, cy: 12, fill: s })
                  : null,
                (0, n.jsx)("path", {
                  d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 6.751C12.69 6.751 13.25 7.311 13.25 8.001C13.25 8.692 12.69 9.251 12 9.251C11.31 9.251 10.75 8.691 10.75 8C10.75 7.31 11.31 6.751 12 6.751ZM15 17H9V15H11V12H10V10H12C12.553 10 13 10.448 13 11V15H15V17Z",
                  fill: a,
                }),
              ],
            });
          },
          s.CircleInformationIcon,
          void 0,
          { size: 24 }
        );
    },
    267675: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("469563"),
        s = l("265614"),
        r = l("75196"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              foreground: s,
              ...i
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("path", {
                className: s,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z",
              }),
            });
          },
          s.ScreenIcon,
          void 0,
          { size: 24 }
        );
    },
    922744: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("469563"),
        s = l("782926"),
        r = l("75196"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              foreground: s,
              ...i
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, n.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z",
                }),
                (0, n.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z",
                }),
                (0, n.jsx)("path", {
                  className: s,
                  fill: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z",
                }),
              ],
            });
          },
          s.ThreadIcon,
          void 0,
          { size: 24 }
        );
    },
    745183: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("469563"),
        s = l("587864"),
        r = l("75196"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              foreground: s,
              ...i
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, n.jsx)("path", {
                  className: s,
                  fill: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z",
                }),
                (0, n.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z",
                }),
                (0, n.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z",
                }),
              ],
            });
          },
          s.ThreadLockIcon,
          void 0,
          { size: 24 }
        );
    },
    233437: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("469563"),
        s = l("17137"),
        r = l("75196"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              foreground: s,
              ...i
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: [
                (0, n.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M22 7.002V5C22 3.898 21.104 3 20 3H4C2.897 3 2 3.898 2 5V7.002H22ZM8 4C8.553 4 9 4.448 9 5C9 5.553 8.553 6 8 6C7.447 6 7 5.553 7 5C7 4.448 7.447 4 8 4ZM5 4C5.553 4 6 4.448 6 5C6 5.553 5.553 6 5 6C4.447 6 4 5.553 4 5C4 4.448 4.447 4 5 4Z",
                }),
                (0, n.jsx)("path", {
                  fill: a,
                  d: "M2 8.00201V19C2 20.103 2.897 21 4 21H20C21.104 21 22 20.103 22 19V8.00201H2Z",
                }),
              ],
            });
          },
          s.BrowserIcon,
          void 0,
          { size: 24 }
        );
    },
    145027: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          BrowserIcon: function () {
            return r;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("669491"),
        s = l("82169");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...u
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: i,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M1 12a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6Z",
              className: i,
            }),
          ],
        });
      };
    },
    247230: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ScreenIcon: function () {
            return r;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("669491"),
        s = l("82169");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...u
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
            className: i,
          }),
        });
      };
    },
    53531: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ThreadLockIcon: function () {
            return r;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("669491"),
        s = l("82169");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...u
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              d: "M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72A1 1 0 0 1 13 19v.15a1 1 0 0 1-.35.69l-1 1 .35.36ZM14.66 16.32c.1-.39.26-.75.45-1.09l-8.2-5.47a1 1 0 1 0-1.12 1.66l8.13 5.42a3 3 0 0 1 .74-.52ZM16.43 13.8c.62-.43 1.36-.7 2.15-.78a1 1 0 0 0-.37-.43L9.73 6.93a1 1 0 0 0-1.11 1.66l7.81 5.21Z",
              fill: "string" == typeof r ? r : r.css,
              className: i,
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              fill: "string" == typeof r ? r : r.css,
              className: i,
            }),
          ],
        });
      };
    },
    351720: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        }),
        l("424973"),
        l("222007");
      var n = l("627445"),
        a = l.n(n),
        s = l("257859"),
        r = l.n(s),
        i = l("353927");
      function u(e, t, l) {
        let n = window.DiscordNative;
        a(null != n, "Can't get desktop sources outside of native app"),
          (t =
            null != t ? t : [i.DesktopSources.WINDOW, i.DesktopSources.SCREEN]),
          (l = null != l ? l : { width: 150, height: 150 });
        let s = [];
        return (
          t.includes(i.DesktopSources.SCREEN) &&
            e.supports(i.Features.SCREEN_PREVIEWS) &&
            (s.push(e.getScreenPreviews(l.width, l.height)),
            (t = t.filter(e => e !== i.DesktopSources.SCREEN))),
          t.includes(i.DesktopSources.WINDOW) &&
            e.supports(i.Features.WINDOW_PREVIEWS) &&
            (s.push(e.getWindowPreviews(l.width, l.height)),
            (t = t.filter(e => e !== i.DesktopSources.WINDOW))),
          0 !== t.length &&
            s.push(
              n.desktopCapture.getDesktopCaptureSources({
                types: t,
                thumbnailSize: l,
              })
            ),
          Promise.all(s).then(e => r(e))
        );
      }
    },
  },
]);
//# sourceMappingURL=7e646ad2ce1a46cec686.js.map
