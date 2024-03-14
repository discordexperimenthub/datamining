(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46150"],
  {
    262228: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a826e445dff97cf15335.svg";
    },
    932498: function (e, t, n) {
      "use strict";
      e.exports = n.p + "7f10d688807618fef460.svg";
    },
    22247: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a8321094b63c5b722adb.mp3";
    },
    890747: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uploadRtcLogFiles: function () {
            return c;
          },
        }),
        n("222007");
      var a = n("811022"),
        i = n("872717"),
        s = n("448993"),
        l = n("42887"),
        o = n("254490"),
        r = n("49671"),
        u = n("49111");
      let d = new a.default("uploadRtcLogFiles");
      async function c(e, t) {
        let n;
        if (null == r.default.fileManager.readLogFiles)
          throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
        let a = [];
        try {
          a = (a = await r.default.fileManager.readLogFiles(e)).map(e =>
            (0, o.transformNativeFile)(e, "application/octet-stream")
          );
        } catch (e) {
          throw (
            (d.error("uploadDebugFiles: read error '".concat(e, "'")),
            new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.READ))
          );
        }
        if (0 === a.length)
          throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.NO_FILE);
        try {
          let e = { extraInfo: t, mediaEngineState: l.default.getState() };
          n = await i.default.post({
            url: u.Endpoints.DEBUG_LOGS(u.DebugLogCategory.RTC),
            attachments: [
              ...a.map(e => ({ name: e.name, file: e, filename: e.name })),
              {
                name: "media_engine_state.json",
                filename: "media_engine_state.json",
                file: new Blob([JSON.stringify(e, void 0, 2)]),
              },
            ],
          });
        } catch (e) {
          if (429 === e.status)
            throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.PROGRESS);
          throw (
            (d.error(
              "Debug log upload error: status: "
                .concat(e.status, ", message: ")
                .concat(e.message)
            ),
            new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.UPLOAD))
          );
        }
        let c = a.length + 1;
        if ("success_count" in n.body && n.body.success_count !== c)
          throw (
            (d.error(
              "Debug log upload: stored files "
                .concat(n.body.success_count, " !== ")
                .concat(c)
            ),
            new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL))
          );
        if (
          ("store_success" in n.body && !n.body.store_success) ||
          ("id_match" in n.body && !n.body.id_match) ||
          ("all_success" in n.body && !n.body.all_success)
        )
          throw (
            (d.error(
              "Debug log upload: store_success: ".concat(
                n.body.store_success,
                " / "
              ) +
                "id_match: ".concat(n.body.id_match, " / ") +
                "all_success: ".concat(n.body.all_success)
            ),
            new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL))
          );
      }
    },
    44771: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var a = n("37983"),
        i = n("884691"),
        s = n("414456"),
        l = n.n(s),
        o = n("917351"),
        r = n.n(o),
        u = n("77078"),
        d = n("164546"),
        c = n("513196"),
        f = n("42723"),
        g = n("605475"),
        m = n("49111"),
        h = n("782340"),
        _ = n("113037");
      let p = () => [
          h.default.Messages.APP_ICON_PIRATE,
          h.default.Messages.APP_ICON_PIRATE_1,
          h.default.Messages.APP_ICON_PIRATE_2,
          h.default.Messages.APP_ICON_PIRATE_3,
          h.default.Messages.APP_ICON_PIRATE_4,
        ],
        E = () => {
          var e;
          return null !== (e = r.sample(p())) && void 0 !== e
            ? e
            : h.default.Messages.APP_ICON_PIRATE;
        };
      function Selection(e) {
        let {
            id: t,
            className: n,
            onSelect: s,
            isSelected: o = !1,
            tabIndex: r,
            children: f,
          } = e,
          [h, p] = i.useState(g.ICONS_BY_ID[t].name),
          S = t === c.PremiumAppIconIds.PIRATE,
          T = (0, u.useRadioItem)({ label: h, isSelected: o });
        return (0, a.jsx)(u.Tooltip, {
          text: h,
          onTooltipShow: () => S && p(E()),
          children: e =>
            (0, a.jsxs)("div", {
              className: _.appIconSelectionContainer,
              children: [
                (0, a.jsx)(u.Clickable, {
                  ...e,
                  ...T,
                  tabIndex: null != r ? r : T.tabIndex,
                  className: l(_.appIconSelection, { [_.selected]: o }, n),
                  onClick: o ? m.NOOP : () => (null == s ? void 0 : s(t)),
                  children: f,
                }),
                o && (0, a.jsx)(d.SelectionCircle, {}),
              ],
            }),
        });
      }
      function S(e) {
        let {
          icon: t,
          isSelected: n,
          disabled: i,
          tabIndex: s,
          onSelect: l,
        } = e;
        return (0, a.jsx)(Selection, {
          onSelect: i ? void 0 : l,
          isSelected: n,
          id: t.id,
          className: i ? _.disabled : void 0,
          tabIndex: s,
          children: (0, a.jsx)(f.default, {
            id: t.id,
            width: g.CUSTOM_BASE_SIZE,
          }),
        });
      }
    },
    433724: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var a = n("37983"),
        i = n("884691"),
        s = n("446674"),
        l = n("77078"),
        o = n("913144"),
        r = n("891653"),
        u = n("225849"),
        d = n("476765"),
        c = n("805199"),
        f = n("44771"),
        g = n("605475"),
        m = n("397336"),
        h = n("782340"),
        _ = n("23661");
      function p(e) {
        let { className: t, disabled: n, renderCTAButtons: p } = e,
          [E, S] = (0, s.useStateFromStoresArray)([c.default], () => [
            c.default.getCurrentDesktopIcon(),
            c.default.isEditorOpen,
          ]),
          T = i.useRef(null);
        (0, u.default)(T, m.AppearanceScrollPositions.CUSTOM_APP_ICONS);
        let v = (0, d.useUID)(),
          N = (0, l.useRadioGroup)({
            orientation: "horizontal",
            labelledBy: v,
          }),
          I = e => {
            o.default.dispatch({ type: "APP_ICON_UPDATED", id: e });
          };
        return (0, a.jsx)("div", {
          ref: T,
          children: (0, a.jsx)("div", {
            ...N,
            className: _.container,
            children: (0, a.jsxs)("div", {
              className: t,
              children: [
                (0, a.jsxs)("div", {
                  className: _.header,
                  children: [
                    (0, a.jsxs)("div", {
                      className: _.headings,
                      children: [
                        S
                          ? null
                          : (0, a.jsxs)("div", {
                              className: _.title,
                              children: [
                                (0, a.jsx)(l.Heading, {
                                  variant: "text-md/medium",
                                  children:
                                    h.default.Messages.APP_ICON_SETTINGS_TITLE,
                                }),
                                (0, a.jsx)(r.default, {
                                  className: _.premiumIcon,
                                }),
                              ],
                            }),
                        (0, a.jsx)(l.Heading, {
                          variant: "text-sm/normal",
                          children:
                            h.default.Messages.APP_ICON_SETTINGS_DESCRIPTION,
                        }),
                      ],
                    }),
                    null == p ? void 0 : p(),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: _.presets,
                  children: g.ICONS.filter(e => {
                    let { isHidden: t } = e;
                    return !0 !== t;
                  }).map((e, t) =>
                    (0, a.jsx)(
                      f.default,
                      {
                        icon: e,
                        isSelected: E === e.id,
                        onSelect: e => I(e),
                        disabled: n,
                        tabIndex: 0 !== t || n ? void 0 : 0,
                      },
                      e.id
                    )
                  ),
                }),
              ],
            }),
          }),
        });
      }
    },
    788434: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openChangelog: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        s = n("234222");
      function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        !(!e && (0, i.hasAnyModalOpen)()) &&
          (0, i.openModalLazy)(
            async () => {
              let { default: e } = await n
                .el("170935")
                .then(n.bind(n, "170935"));
              return t => (0, a.jsx)(e, { ...t });
            },
            { modalKey: s.CHANGELOG_MODAL_KEY }
          );
      }
    },
    92130: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var i = e => {
        let { fill: t, className: n } = e;
        return (0, a.jsxs)("svg", {
          className: n,
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: t,
          children: [
            (0, a.jsx)("g", {
              id: "Frame_-_24px",
              children: (0, a.jsx)("rect", {
                y: "0",
                fill: "none",
                width: "24",
                height: "24",
              }),
            }),
            (0, a.jsx)("g", {
              id: "Filled_Icons",
              children: (0, a.jsxs)("g", {
                children: [
                  (0, a.jsx)("path", {
                    fill: t,
                    d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10    C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z",
                  }),
                  (0, a.jsx)("path", {
                    fill: t,
                    d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10    c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z",
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    164546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SelectionCircle: function () {
            return S;
          },
          DefaultThemeSelection: function () {
            return v;
          },
          GradientThemeSelection: function () {
            return N;
          },
        }),
        n("794252");
      var a = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("506838"),
        o = n("446674"),
        r = n("669491"),
        u = n("2662"),
        d = n("819855"),
        c = n("77078"),
        f = n("161778"),
        g = n("578706"),
        m = n("253539"),
        h = n("92130"),
        _ = n("49111"),
        p = n("782340"),
        E = n("605940");
      function S() {
        return (0, a.jsx)("div", {
          className: E.selectionCircle,
          children: (0, a.jsx)(g.default, {
            className: E.checkmarkCircle,
            foreground: E.checkmark,
            backgroundColor: r.default.unsafe_rawColors.WHITE_500.css,
          }),
        });
      }
      function T(e) {
        let {
            name: t,
            className: n,
            style: i,
            onSelect: l,
            isSelected: o = !1,
            tabIndex: r,
            children: u,
          } = e,
          d = (0, c.useRadioItem)({ label: t, isSelected: o });
        return (0, a.jsx)(c.Tooltip, {
          text: t,
          children: e =>
            (0, a.jsxs)("div", {
              className: E.themeSelectionContainer,
              children: [
                (0, a.jsx)(c.Clickable, {
                  ...e,
                  ...d,
                  tabIndex: null != r ? r : d.tabIndex,
                  className: s(E.themeSelection, { [E.selected]: o }, n),
                  style: i,
                  onClick: o ? _.NOOP : l,
                  children: u,
                }),
                o && (0, a.jsx)(S, {}),
              ],
            }),
        });
      }
      function v(e) {
        let { theme: t, isSelected: n, onSelect: i } = e,
          g = (0, o.useStateFromStores)(
            [f.default],
            () => f.default.systemPrefersColorScheme
          ),
          m = e =>
            (0, d.isThemeLight)(e)
              ? r.default.unsafe_rawColors.PRIMARY_600.css
              : r.default.unsafe_rawColors.WHITE_500.css,
          S = (0, l.match)({ theme: t, systemPrefersColorScheme: g })
            .with(
              { theme: "system", systemPrefersColorScheme: _.ThemeTypes.LIGHT },
              () => E.lightIcon
            )
            .with({ theme: _.ThemeTypes.LIGHT }, () => E.lightIcon)
            .otherwise(() => E.darkIcon),
          v = (0, l.match)(t)
            .with(_.ThemeTypes.LIGHT, () => p.default.Messages.THEME_LIGHT)
            .with(_.ThemeTypes.DARK, () => p.default.Messages.THEME_DARK)
            .with("system", () => p.default.Messages.THEME_SYSTEM)
            .exhaustive(),
          N = (0, c.useRedesignIconContext)().enabled;
        return (0, a.jsx)(T, {
          onSelect: i,
          isSelected: n,
          name: v,
          className: s(E.defaultThemeSelection, S),
          children:
            "system" === t &&
            (0, a.jsx)("div", {
              className: E.iconWrapper,
              children: N
                ? (0, a.jsx)(u.RefreshIcon, { color: m(g) })
                : (0, a.jsx)(h.default, { fill: m(g) }),
            }),
        });
      }
      function N(e) {
        let {
            preset: t,
            isSelected: n,
            disabled: i,
            tabIndex: l,
            onSelect: o,
          } = e,
          { colors: r, angle: u, theme: c } = t,
          f = (0, m.getLinearGradientForBackgroundGradient)({
            colors: r,
            angle: u,
          });
        return (0, a.jsx)(T, {
          onSelect: i ? void 0 : o,
          isSelected: n,
          name: t.getName(),
          className: s([
            i ? E.disabled : null,
            (0, d.isThemeDark)(c) ? E.darkOverlay : E.lightOverlay,
          ]),
          style: { background: "var(--bg-overlay), ".concat(f) },
          tabIndex: l,
        });
      }
    },
    648114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ThemeSelectionGroupType: function () {
            return a;
          },
          trackClientThemeUpdated: function () {
            return H;
          },
          default: function () {
            return W;
          },
        }),
        n("794252"),
        n("222007");
      var a,
        i,
        s = n("37983"),
        l = n("884691"),
        o = n("414456"),
        r = n.n(o),
        u = n("506838"),
        d = n("446674"),
        c = n("151426"),
        f = n("819855"),
        g = n("77078"),
        m = n("452804"),
        h = n("206230"),
        _ = n("812204"),
        p = n("685665"),
        E = n("626301"),
        S = n("917247"),
        T = n("956597"),
        v = n("891653"),
        N = n("505093"),
        I = n("161778"),
        y = n("168973"),
        C = n("491605"),
        A = n("476765"),
        M = n("599110"),
        O = n("32531"),
        b = n("714657"),
        P = n("164546"),
        w = n("941719"),
        R = n("49111"),
        L = n("646718"),
        D = n("116319"),
        x = n("397336"),
        G = n("843455"),
        U = n("782340"),
        j = n("845797");
      ((i = a || (a = {})).EDITOR = "EDITOR"), (i.SETTINGS = "SETTINGS");
      let k = Object.freeze({
          EDITOR: x.UserSettingsDelay.SLOW_USER_ACTION,
          SETTINGS: x.UserSettingsDelay.INFREQUENT_USER_ACTION,
        }),
        F = l.createContext({}),
        H = e => {
          let { isPersisted: t, themeName: n, analyticsLocations: a } = e;
          M.default.track(R.AnalyticEvents.CLIENT_THEME_UPDATED, {
            feature_name: L.AnalyticsPremiumFeatureNames.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: a,
          });
        },
        B = e => {
          let { type: t, isPreview: n, isCoachmark: a } = e,
            i = (0, u.match)({ type: t, isPreview: n, isCoachmark: a })
              .with(
                { type: "EDITOR", isCoachmark: !0, isPreview: !0 },
                () =>
                  U.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER
              )
              .with(
                { type: "EDITOR", isCoachmark: !0 },
                () =>
                  U.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER
              )
              .otherwise(
                () =>
                  U.default.Messages
                    .USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE
              );
          return (0, s.jsxs)("div", {
            className: j.title,
            children: [
              (0, s.jsx)(g.Heading, {
                "aria-label": i,
                variant: "text-md/medium",
                children: i,
              }),
              (0, s.jsx)(v.default, { className: j.premiumIcon }),
            ],
          });
        },
        V = e => {
          var t, n;
          let { type: a, isPreview: i, isCoachmark: l } = e,
            o =
              (null === (n = (0, S.usePremiumTrialOffer)()) || void 0 === n
                ? void 0
                : null === (t = n.subscription_trial) || void 0 === t
                  ? void 0
                  : t.sku_id) === L.PremiumSubscriptionSKUs.TIER_2;
          if (o && i) return null;
          let r = (0, u.match)({ type: a, isPreview: i, isCoachmark: l })
            .with({ type: "EDITOR", isPreview: !0 }, () =>
              U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format(
                { onPremiumClick: E.navigateToPremiumMarketingPage }
              )
            )
            .with(
              { type: "EDITOR", isCoachmark: !0 },
              () =>
                U.default.Messages
                  .CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK
            )
            .with(
              { type: "EDITOR", isPreview: !1 },
              () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION
            )
            .with({ isPreview: !0 }, () =>
              U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format(
                { onPremiumClick: E.navigateToPremiumMarketingPage }
              )
            )
            .otherwise(
              () =>
                U.default.Messages
                  .CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS
            );
          return (0, s.jsx)(g.Heading, {
            variant: "text-sm/normal",
            children: r,
          });
        },
        K = e => {
          let { type: t, children: n } = e,
            a = (0, A.useUID)(),
            i = (0, g.useRadioGroup)({
              orientation: "horizontal",
              labelledBy: a,
            }),
            o = l.useMemo(() => ({ type: t, delay: k[t] }), [t]);
          return (0, s.jsx)(F.Provider, {
            value: o,
            children: (0, s.jsx)("div", {
              ...i,
              className: j.container,
              children: n,
            }),
          });
        };
      (K.Basic = e => {
        let { className: t } = e,
          { delay: n } = l.useContext(F),
          { analyticsLocations: a } = (0, p.default)(
            _.default.CLIENT_THEMES_THEME_SELECTOR
          ),
          [i, o, u] = (0, d.useStateFromStoresArray)(
            [I.default, y.default, b.default],
            () => [
              I.default.theme,
              null == b.default.gradientPreset,
              y.default.useSystemTheme === D.SystemThemeState.ON,
            ]
          ),
          c = e => {
            (0, O.resetBackgroundGradientPreset)(),
              H({
                isPersisted: !0,
                analyticsLocations: a,
                themeName: "default ".concat(e),
              }),
              (0, m.saveClientTheme)({ theme: e }, n);
          };
        return (0, s.jsxs)("section", {
          className: r(j.presets, t),
          children: [
            (0, s.jsx)(P.DefaultThemeSelection, {
              theme: G.ThemeTypes.LIGHT,
              isSelected: o && !u && (0, f.isThemeLight)(i),
              onSelect: () => c(G.ThemeTypes.LIGHT),
            }),
            (0, s.jsx)(P.DefaultThemeSelection, {
              theme: G.ThemeTypes.DARK,
              isSelected: o && !u && (0, f.isThemeDark)(i),
              onSelect: () => c(G.ThemeTypes.DARK),
            }),
            (0, s.jsx)(P.DefaultThemeSelection, {
              theme: "system",
              isSelected: o && u,
              onSelect: () => c("system"),
            }),
          ],
        });
      }),
        (K.Gradient = e => {
          var t, a;
          let { className: i, renderCTAButtons: o, disabled: r = !1 } = e,
            { type: u, delay: f } = l.useContext(F),
            { analyticsLocations: g } = (0, p.default)(
              _.default.CLIENT_THEMES_THEME_SELECTOR
            ),
            [v, I, y] = (0, d.useStateFromStoresArray)([b.default], () => {
              var e;
              return [
                b.default.isPreview,
                b.default.isCoachmark,
                null === (e = b.default.gradientPreset) || void 0 === e
                  ? void 0
                  : e.id,
              ];
            }),
            [A, M] = l.useState(!1),
            [R, x] = l.useState(-1),
            G = (0, d.useStateFromStores)(
              [h.default],
              () => h.default.useReducedMotion
            ),
            k =
              (null === (a = (0, S.usePremiumTrialOffer)()) || void 0 === a
                ? void 0
                : null === (t = a.subscription_trial) || void 0 === t
                  ? void 0
                  : t.sku_id) === L.PremiumSubscriptionSKUs.TIER_2;
          l.useEffect(() => {
            ((R === w.BACKGROUND_GRADIENT_PRESETS.length - 2 &&
              "EDITOR" === u) ||
              y === c.BackgroundGradientPresetId.EASTER_EGG) &&
              M(!0);
          }, [R, u, y]);
          let K = (e, t) => {
            if (
              ((0, O.updateBackgroundGradientPreset)(e.id),
              H({
                isPersisted: !v,
                analyticsLocations: g,
                themeName: c.BackgroundGradientPresetId[e.id],
              }),
              v)
            ) {
              (0, N.setUseSystemTheme)(D.SystemThemeState.OFF);
              return;
            }
            if (
              ((0, m.saveClientTheme)(
                { backgroundGradientPresetId: e.id, theme: e.theme },
                f
              ),
              null != t)
            ) {
              if ((A && M(!1), t <= R || 0 === t)) {
                x(0);
                return;
              }
              x(e => e + 1);
            }
          };
          return (0, s.jsxs)("section", {
            className: i,
            children: [
              "EDITOR" === u && v && k
                ? (0, s.jsx)(T.default, {
                    type: L.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
                    children:
                      U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format(
                        { onPremiumClick: E.navigateToPremiumMarketingPage }
                      ),
                  })
                : (0, s.jsxs)("div", {
                    className: j.header,
                    children: [
                      (0, s.jsxs)("div", {
                        className: j.headings,
                        children: [
                          (0, s.jsx)(B, {
                            type: u,
                            isPreview: v,
                            isCoachmark: I,
                          }),
                          (0, s.jsx)(V, {
                            type: u,
                            isPreview: v,
                            isCoachmark: I,
                          }),
                        ],
                      }),
                      null == o ? void 0 : o(),
                    ],
                  }),
              (0, s.jsxs)("div", {
                className: j.presets,
                children: [
                  w.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                    let { id: t } = e;
                    return t !== c.BackgroundGradientPresetId.EASTER_EGG;
                  }).map((e, t) =>
                    (0, s.jsx)(
                      P.GradientThemeSelection,
                      {
                        preset: e,
                        isSelected: y === e.id,
                        onSelect: () => K(e, t),
                        disabled: r,
                        tabIndex: 0 !== t || r ? void 0 : 0,
                      },
                      e.id
                    )
                  ),
                  (() => {
                    if (!A) return null;
                    let e =
                      w.BACKGROUND_GRADIENT_PRESETS_MAP[
                        c.BackgroundGradientPresetId.EASTER_EGG
                      ];
                    if (null == e) return null;
                    async function t() {
                      let { default: e } = await n
                        .el("922510")
                        .then(n.t.bind(n, "922510", 19));
                      return e;
                    }
                    return (0, s.jsxs)("div", {
                      className: j.easterEggSelection,
                      children: [
                        (0, s.jsx)(P.GradientThemeSelection, {
                          preset: e,
                          isSelected:
                            y === c.BackgroundGradientPresetId.EASTER_EGG,
                          onSelect: () => K(e),
                        }),
                        (0, s.jsx)(C.default, {
                          importData: t,
                          shouldAnimate: !G,
                          className: j.sparkles,
                        }),
                      ],
                    });
                  })(),
                ],
              }),
            ],
          });
        });
      var W = K;
    },
    147746: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uploadDebugLogFiles: function () {
            return g;
          },
        });
      var a = n("872717"),
        i = n("890747"),
        s = n("42203"),
        l = n("821316"),
        o = n("605250"),
        r = n("836403"),
        u = n("825287"),
        d = n("929331"),
        c = n("49111");
      let f = new o.default("DebugUploadManager");
      async function g(e, t) {
        await m(e), await (0, i.uploadRtcLogFiles)(14680064, t);
      }
      async function m(e) {
        try {
          let t = l.stringify(),
            n = "",
            i = await (0, r.getPushNotificationLogs)().then(e =>
              (0, r.serializePushNotificationLogs)(e, !0)
            ),
            o = t.length + n.length + i.length;
          if (o > 9437184) {
            let e = 1 - 9437184 / o;
            (t = t.slice(t.length - Math.floor(t.length * e))),
              (n = n.slice(n.length - Math.floor(n.length * e))),
              (i = i.slice(i.length - Math.floor(i.length * e)));
          }
          let f = null,
            g = "\n    "
              .concat((0, d.default)(f), "\n\n    Metadata:\n    ")
              .concat(
                JSON.stringify((0, u.default)(), void 0, 2),
                "\n\n    ChannelStore:\n    "
              )
              .concat(
                JSON.stringify(s.default.getDebugInfo(), void 0, 2),
                "\n\n    Logs:\n    "
              )
              .concat(t, "\n\n    System logs:\n    ")
              .concat(n, "\n\n    Push Notifications:\n    ")
              .concat(i, "\n    ");
          l.clear();
          let m = c.Endpoints.DEBUG_LOG(e, "discord_app_logs");
          await a.default.post({
            url: m,
            body: g,
            retries: 3,
            headers: { "Content-Type": "text/plain" },
            oldFormErrors: !0,
          });
        } catch (e) {
          f.error(
            "uploadAppLogFiles: upload app log files error ".concat(e.message)
          );
        }
      }
    },
    836403: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          serializePushNotificationLogs: function () {
            return l;
          },
          getPushNotificationLogs: function () {
            return o;
          },
        });
      var a = n("95410"),
        i = n("271938"),
        s = n("49111");
      function l(e, t) {
        if (0 === e.length) return "No logs";
        let n = a.default.get(s.DEVICE_TOKEN),
          i = a.default.get(s.DEVICE_VOIP_TOKEN),
          l = e
            .map(e => {
              let n = e.silent ? "Silent" : "Displayed",
                a = t
                  ? "".concat(e.channelId, " - ").concat(e.messageId)
                  : "".concat(e.title, " - ").concat(e.content);
              return ""
                .concat(new Date(e.receivedTimestamp).toISOString(), " [")
                .concat(e.type, "] ")
                .concat(n, " - ")
                .concat(a);
            })
            .join("\n");
        return ""
          .concat(null != n ? "Device Token: ".concat(n) : "", "\n")
          .concat(null != i ? "Device Voip Token: ".concat(i) : "", "\n\n")
          .concat(l);
      }
      async function o() {
        let e = i.default.getId(),
          t = [];
        return t;
      }
    },
    825287: function (e, t, n) {
      "use strict";
      function a() {
        return {
          logsUploaded: new Date().toISOString(),
          releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
          buildNumber: "275297",
          versionHash: "35864f2e0c840bee34d4330deca6da7d4e37ac80",
        };
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
    },
    929331: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("781738"),
        n("424973"),
        n("222007");
      var a = n("917351"),
        i = n.n(a),
        s = n("102053"),
        l = n("487269");
      function o(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return s.default.logGroups
          .map(a => {
            var s, o;
            let {
                index: u,
                timestamp: d,
                logs: c,
                nativeLogs: f,
                serverTrace: g,
              } = a,
              m =
                0 === u
                  ? null !==
                      (o =
                        null ===
                          (s = i.find(
                            c,
                            e => e.log.indexOf("Logger loaded") >= 0
                          )) || void 0 === s
                          ? void 0
                          : s.timestamp) && void 0 !== o
                    ? o
                    : e
                  : d,
              h = (function (e, t) {
                var n, a;
                let s = (function (e) {
                    let t = [];
                    for (let n = 0; n < e.length; n++) {
                      let a = e[n],
                        i = e[n + 1];
                      null != i && i.log === a.log.replace("Start ", "Finish ")
                        ? ((i.log = i.log.replace("Finish ", "")),
                          t.push(i),
                          n++)
                        : t.push(a);
                    }
                    return t;
                  })(e).map(e => {
                    let n =
                        null == e.timestamp
                          ? ""
                          : ((e.timestamp - t) / 1e3).toFixed(3),
                      a = null == e.delta ? "" : String(Math.round(e.delta));
                    return {
                      totalTime: n,
                      deltaTime: a,
                      log: ""
                        .concat(
                          e.emoji.length > 0 ? "".concat(e.emoji, " ") : ""
                        )
                        .concat(e.prefix)
                        .concat(e.log, "\n"),
                    };
                  }),
                  l =
                    null !== (n = i.max(s.map(e => e.totalTime.length))) &&
                    void 0 !== n
                      ? n
                      : 0,
                  o =
                    null !== (a = i.max(s.map(e => e.deltaTime.length))) &&
                    void 0 !== a
                      ? a
                      : 0;
                return s
                  .map(e => {
                    let { totalTime: t, deltaTime: n, log: a } = e;
                    return ""
                      .concat(i.padStart(t, l), " ")
                      .concat(i.padStart(n, o), " ")
                      .concat(a);
                  })
                  .join("");
              })(
                (function (e, t, n, a) {
                  e = e.slice();
                  let i = new Set(t.map(r)),
                    s = "",
                    l = [];
                  t.forEach(t => {
                    let a = r(t),
                      o = 0,
                      u = n || !t.autoGenerated,
                      d =
                        a.startsWith("Start ") &&
                        !a.includes("RUN_JS_BUNDLE") &&
                        i.has(a.replace("Start ", "Finish ")),
                      c =
                        a.startsWith("Finish ") &&
                        !a.includes("RUN_JS_BUNDLE") &&
                        i.has(a.replace("Finish ", "Start "));
                    if (c) {
                      s = s.substring(2);
                      let e = l.pop();
                      null != e &&
                        ((o = t.timestamp - e.timestamp),
                        (u =
                          u ||
                          (o > 5 &&
                            !(function (e) {
                              return [
                                "GET_CONSTANTS",
                                "CONVERT_CONSTANTS",
                              ].some(t => e.includes(t));
                            })(a))),
                        (e.shouldKeep = e.shouldKeep || u));
                    }
                    let f = {
                      emoji: "☕",
                      timestamp: t.timestamp,
                      delta: o > 0 ? o : void 0,
                      prefix: s,
                      log: a,
                      shouldKeep: u,
                    };
                    (function (e, t) {
                      let n = 0;
                      for (; n < e.length; n++) {
                        let { timestamp: a } = e[n];
                        if (null != a && a > t.timestamp) break;
                      }
                      e.splice(n, 0, t);
                    })(e, f),
                      d && ((s += "| "), l.push(f));
                  });
                  let o = !1;
                  return e.filter(
                    e =>
                      !(o && e.log.includes("↪")) &&
                      !(o =
                        (!a && "\uD83C\uDFA8" === e.emoji) ||
                        !1 === e.shouldKeep)
                  );
                })(c, f, t, n),
                m
              ),
              _ = "Trace #"
                .concat(u + 1, " started ")
                .concat((0, l.getTimestampString)(d), "\n")
                .concat(h);
            return (
              null != g &&
                (_ += "\n Server trace for trace #".concat(u + 1).concat(g)),
              _
            );
          })
          .join("\n\n");
      }
      function r(e) {
        let t = null == e.tag ? e.label : "".concat(e.label, " ").concat(e.tag);
        return (
          t.includes("_START") && (t = "Start " + t.replace("_START", "")),
          t.includes("_END") && (t = "Finish " + t.replace("_END", "")),
          t
        );
      }
    },
    630615: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getLootboxes: function () {
            return d;
          },
          LOOTBOX_COUNT_INTERPOLATE_START: function () {
            return c;
          },
          LOOTBOX_COUNT_STAT_FETCH_DELAY_MIN: function () {
            return f;
          },
          LOOTBOX_COUNT_STAT_FETCH_DELAY_MAX: function () {
            return g;
          },
          IS_LOOTBOXES_READY: function () {
            return m;
          },
          getLootboxPrizeAvatarDecoration: function () {
            return h;
          },
        });
      var a,
        i,
        s = n("265586"),
        l = n("718517"),
        o = n("782340"),
        r = n("262228");
      let u = n("22247");
      ((a = i || (i = {})).ITEM_1 = "1214340999644446720"),
        (a.ITEM_2 = "1214340999644446721"),
        (a.ITEM_3 = "1214340999644446722"),
        (a.ITEM_4 = "1214340999644446723"),
        (a.ITEM_5 = "1214340999644446724"),
        (a.ITEM_6 = "1214340999644446725"),
        (a.ITEM_7 = "1214340999644446726"),
        (a.ITEM_8 = "1214340999644446727"),
        (a.ITEM_9 = "1214340999644446728");
      let d = () => ({
          "1214340999644446720": {
            name: o.default.Messages.PACKAGE_ITEM_1_NAME,
            image: r,
            sound: u,
          },
          "1214340999644446721": {
            name: o.default.Messages.PACKAGE_ITEM_2_NAME,
            image: r,
            sound: u,
          },
          "1214340999644446722": {
            name: o.default.Messages.PACKAGE_ITEM_3_NAME,
            image: r,
            sound: u,
          },
          "1214340999644446723": {
            name: o.default.Messages.PACKAGE_ITEM_4_NAME,
            image: r,
            sound: u,
          },
          "1214340999644446724": {
            name: o.default.Messages.PACKAGE_ITEM_5_NAME,
            image: r,
            sound: u,
          },
          "1214340999644446725": {
            name: o.default.Messages.PACKAGE_ITEM_6_NAME,
            image: r,
            sound: u,
          },
          "1214340999644446726": {
            name: o.default.Messages.PACKAGE_ITEM_7_NAME,
            image: r,
            sound: u,
          },
          "1214340999644446727": {
            name: o.default.Messages.PACKAGE_ITEM_8_NAME,
            image: r,
            sound: u,
          },
          "1214340999644446728": {
            name: o.default.Messages.PACKAGE_ITEM_9_NAME,
            image: r,
            sound: u,
          },
        }),
        c = l.default.Millis.SECOND,
        f = l.default.Millis.MINUTE,
        g = l.default.Millis.MINUTE + 10 * l.default.Millis.SECOND,
        m = !1;
      function h() {
        return {
          type: s.CollectiblesItemType.AVATAR_DECORATION,
          id: "1216909016681156768",
          skuId: "1216908559548289084",
          asset: "",
          label: "",
        };
      }
    },
    447845: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("862205");
      let i = (0, a.createExperiment)({
        kind: "user",
        id: "2024-03_packages",
        label: "Packages",
        defaultConfig: { allowOpeningLootboxes: !1 },
        treatments: [
          {
            id: 1,
            label: "Allow users to open packages",
            config: { allowOpeningLootboxes: !0 },
          },
        ],
      });
      var s = i;
    },
    724001: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("82169"),
        s = n("900158"),
        l = n("669491"),
        o = n("630615");
      function r(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...r
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, i.default)(r),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3 8C3 5.79086 4.79086 4 7 4C9.20914 4 11 5.79086 11 8V13C11 13.5523 10.5523 14 10 14H4C3.44772 14 3 13.5523 3 13V8ZM5 10C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H6V7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7V8H9.14286C9.61624 8 10 8.38376 10 8.85714V9.14286C10 9.61624 9.61624 10 9.14286 10H7.42857H6.57143H5Z",
              fill: "string" == typeof s ? s : s.css,
              className: o,
            }),
            (0, a.jsx)("path", {
              d: "M10 16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V21C14 21.5523 13.5523 22 13 22H11C10.4477 22 10 21.5523 10 21V16Z",
              fill: "string" == typeof s ? s : s.css,
              className: o,
            }),
            (0, a.jsx)("path", {
              d: "M10.6178 4.29252C10.4697 4.22237 10.5197 4 10.6836 4H17C19.2092 4 21 5.79087 21 8.00001L21 13C21 13.5523 20.5523 14 20 14H12.8774C12.4548 14 12.1121 13.6574 12.1121 13.2347V6.65331C12.1121 5.64373 11.5303 4.72454 10.6178 4.29252V4.29252Z",
              fill: "string" == typeof s ? s : s.css,
              className: o,
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14 4C14 3.44772 14.4477 3 15 3V3C15.5523 3 16 2.55228 16 2V2C16 1.44772 15.5523 1 15 1H13C12.4477 1 12 1.44772 12 2V2V3V4C12 4.55228 12.4477 5 13 5V5C13.5523 5 14 4.55228 14 4V4Z",
              fill: "string" == typeof s ? s : s.css,
              className: o,
            }),
          ],
        });
      }
      function u(e) {
        return o.IS_LOOTBOXES_READY
          ? (0, a.jsx)(s.ExperimentalLootboxIcon, { ...e })
          : (0, a.jsx)(r, { ...e });
      }
    },
    638131: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var a = n("37983"),
        i = n("884691"),
        s = n("414456"),
        l = n.n(s),
        o = n("917351"),
        r = n.n(o),
        u = n("907002"),
        d = n("446674"),
        c = n("206230"),
        f = n("197936");
      let g = { mass: 10, tension: 550, friction: 140 };
      function m(e) {
        let { className: t, pageMultiplier: n } = e,
          s = (0, d.useStateFromStores)(
            [c.default],
            () => c.default.useReducedMotion
          ),
          [o, m] = i.useState({ x: 0, y: 0 }),
          h = i.useMemo(
            () =>
              r.throttle(e => {
                if (s) return;
                let t = (window.innerWidth - e.pageX * n) / 90,
                  a = (window.innerHeight - e.pageY * n) / 90;
                m({ x: t, y: a });
              }, 20),
            [n, s]
          );
        i.useEffect(
          () => (
            window.addEventListener("mousemove", h),
            () => window.removeEventListener("mousemove", h)
          ),
          [h]
        );
        let [_, p] = (0, u.useSpring)(() => ({ x: 0, y: 0, config: g }));
        return (
          i.useEffect(() => {
            p({ x: o.x, y: o.y });
          }, [o.x, o.y, p]),
          (0, a.jsx)(u.animated.div, {
            style: {
              transform: (0, u.to)([_.x, _.y], (e, t) =>
                "translate3d(".concat(e, "px, ").concat(t, "px, 0)")
              ),
            },
            className: l(f.background, t),
          })
        );
      }
    },
    649649: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          listSnapshots: function () {
            return o;
          },
          takeSnapshot: function () {
            return r;
          },
          restoreSnapshot: function () {
            return u;
          },
          backupSettings: function () {
            return c;
          },
        });
      var a = n("917351"),
        i = n.n(a),
        s = n("872717"),
        l = n("49111");
      async function o() {
        return (await s.default.get(l.Endpoints.NOTIFICATION_SNAPSHOTS)).body;
      }
      async function r(e) {
        return (
          await s.default.post({
            url: l.Endpoints.NOTIFICATION_SNAPSHOTS,
            body: { label: e },
          })
        ).body;
      }
      async function u(e) {
        return (
          await s.default.post(l.Endpoints.RESTORE_NOTIFICATION_SNAPSHOT(e))
        ).body;
      }
      async function d(e) {
        return (await s.default.delete(l.Endpoints.NOTIFICATION_SNAPSHOT(e)))
          .body;
      }
      async function c(e) {
        if (e.length > 0) {
          var t;
          let n = i.sum(e.map(e => e.length)),
            a =
              null !== (t = i.max(e.map(e => e.length))) && void 0 !== t
                ? t
                : 0;
          if (e.length >= 5 || n + a > 1e6) {
            let t = i.sortBy(e, e => new Date(e.recorded_at).getTime());
            await d(t[0].id);
          }
        }
        return r("Backup from ".concat(new Date().toLocaleDateString()));
      }
    },
    380353: function (e, t, n) {
      "use strict";
      var a, i, s, l;
      n.r(t),
        n.d(t, {
          Mode: function () {
            return a;
          },
          PainLevel: function () {
            return i;
          },
          defaultThresholds: function () {
            return o;
          },
        }),
        ((s = a || (a = {}))[(s.KeepAsIs = 0)] = "KeepAsIs"),
        (s[(s.UseGreyDot = 1)] = "UseGreyDot"),
        ((l = i || (i = {}))[(l.Low = 0)] = "Low"),
        (l[(l.Medium = 1)] = "Medium"),
        (l[(l.High = 2)] = "High");
      let o = {
        careALot: {
          monthOpenPerc: 0.01,
          yearOpenPerc: 0.01,
          sentMessages: 1e3,
        },
        careALittle: {
          monthOpenPerc: 0.001,
          yearOpenPerc: 0.001,
          sentMessages: 5,
          minOpens: 2,
        },
        smallServerSize: 50,
        mediumServerSize: 200,
        frecency: {
          yearMinOpensSmallServer: 10,
          yearMinOpensLargeServer: 50,
          monthMinOpens: 2,
          totalOpensPercent: 0.1,
        },
      };
    },
    699668: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGuildMigrationSteps: function () {
            return D;
          },
          hasGoodCandidateServers: function () {
            return x;
          },
          autoMigrateToNewSystem: function () {
            return G;
          },
          useSaveSettings: function () {
            return U;
          },
          revertToOldSystem: function () {
            return B;
          },
          transformUsageData: function () {
            return V;
          },
        }),
        n("222007"),
        n("702976"),
        n("808653"),
        n("70102");
      var a = n("884691"),
        i = n("917351"),
        s = n.n(i),
        l = n("446674"),
        o = n("95410"),
        r = n("913144"),
        u = n("404118"),
        d = n("519705"),
        c = n("542827"),
        f = n("679428"),
        g = n("42507"),
        m = n("350522"),
        h = n("525065"),
        _ = n("952451"),
        p = n("305961"),
        E = n("677099"),
        S = n("282109"),
        T = n("599110"),
        v = n("568734"),
        N = n("449008"),
        I = n("286235"),
        y = n("299039"),
        C = n("649649"),
        A = n("845868"),
        M = n("287223"),
        O = n("76618"),
        b = n("380353"),
        P = n("49111"),
        w = n("133335"),
        R = n("397336"),
        L = n("782340");
      function D(e, t) {
        let [n, i] = a.useState(b.defaultThresholds),
          [o, r] = a.useState({});
        (0, g.useFrecencySettings)();
        let u = (0, l.useStateFromStoresArray)([p.default], () =>
            Object.values(p.default.getGuilds())
          ),
          d = a.useCallback(() => {
            let a = {};
            for (let i of u)
              a[i.id] = (function (e, t, n, a, i) {
                var s;
                let [l, o, r] = m.default.hasConsented(
                    P.Consents.PERSONALIZATION
                  )
                    ? (0, M.guessGuildModeWithRemoteData)(e, t, n, a, !0)
                    : (0, M.guessGuildModeWithLocalData)(e, n),
                  u =
                    null !== (s = n.filter(t => t.guild_id === e.id)[0]) &&
                    void 0 !== s
                      ? s
                      : {},
                  d = (0, A.default)(e, null != i ? i : l, u, a, t);
                return {
                  guildId: e.id,
                  mode: l,
                  debugReason: r,
                  actions: d,
                  overrideMode: i,
                  messagePain: u.messages === b.PainLevel.High,
                  visitsALot: o,
                  muted:
                    S.default.isMuted(e.id) &&
                    !S.default.isTemporarilyMuted(e.id),
                };
              })(i, n, e, t, o[i.id]);
            return a;
          }, [u, n, e, t, o]),
          [c, f] = a.useState(() => d());
        a.useEffect(() => f(d()), [d]);
        let h = a.useCallback((e, t) => {
          r(n => ({ ...n, [e]: t }));
        }, []);
        return {
          guildPlans: c,
          overrideGuild: h,
          setThresholds: i,
          getDebug: () =>
            (function (e, t) {
              let n = t.reduce((e, t) => {
                  var n;
                  return (
                    e +
                    Number(
                      null !== (n = t.num_year_opens) && void 0 !== n ? n : 0
                    )
                  );
                }, 0),
                a = t.reduce((e, t) => {
                  var n;
                  return (
                    e +
                    Number(
                      null !== (n = t.num_month_opens) && void 0 !== n ? n : 0
                    )
                  );
                }, 0),
                i = E.default.getFlattenedGuildIds(),
                l = s.sortBy(Object.values(e), e => {
                  let t = i.indexOf(e.guildId);
                  return -1 === t ? i.length : t;
                }),
                o = [
                  ["Use Grey Dot", new Set([b.Mode.UseGreyDot])],
                  ["Keep As Is", new Set([b.Mode.KeepAsIs])],
                ].map(e => {
                  let [t, n] = e,
                    a = l.filter(e => {
                      var t;
                      return n.has(
                        null !== (t = e.overrideMode) && void 0 !== t
                          ? t
                          : e.mode
                      );
                    }),
                    i = a.map(e => {
                      let t = p.default.getGuild(e.guildId),
                        n = e.actions
                          .map(e => {
                            var t;
                            return "- "
                              .concat(e.label)
                              .concat(
                                null !== (t = e.debug) && void 0 !== t ? t : ""
                              );
                          })
                          .join("\n");
                      return "### "
                        .concat(t.name, "\n**Reasoning**: ")
                        .concat(e.debugReason, "**ActionPlan**:\n")
                        .concat(n);
                    });
                  return "# ".concat(t, "\n\n").concat(i.join("\n\n"));
                });
              return "\n# Basic Stats\n- Total channel visits (yr): "
                .concat(n, "\n- Total channel visits (month): ")
                .concat(a, "\n\n")
                .concat(o.join("\n\n"));
            })(Object.values(c), t),
        };
      }
      function x(e, t) {
        return Object.values(p.default.getGuilds()).some(n => {
          let [a] = m.default.hasConsented(P.Consents.PERSONALIZATION)
            ? (0, M.guessGuildModeWithRemoteData)(
                n,
                b.defaultThresholds,
                e,
                t,
                !1
              )
            : (0, M.guessGuildModeWithLocalData)(n, e);
          return a === b.Mode.UseGreyDot;
        });
      }
      function G() {
        let e = Object.values(p.default.getGuilds()),
          t = {};
        for (let i of e) {
          var n, a;
          let e =
              null !==
                (n = S.default.getAllSettings().userGuildSettings[i.id]) &&
              void 0 !== n
                ? n
                : {},
            s = null !== (a = e.flags) && void 0 !== a ? a : 0;
          (s = (0, v.setFlag)(
            s,
            R.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES,
            !0
          )),
            (s = (0, v.setFlag)(
              s,
              R.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS,
              !1
            )),
            (t[i.id] = { flags: s });
        }
        k(t),
          T.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
            auto_migrated: !0,
            num_unread_guids_after: e.filter(e => _.default.hasUnread(e.id))
              .length,
          });
      }
      function U(e) {
        let [t, n] = a.useState(!1),
          [i, s] = a.useState(!1),
          l = a.useCallback(
            async t => {
              if (i) throw Error("Already submitted notifications migration");
              n(!0);
              try {
                await j(t, e), s(!0);
              } finally {
                n(!1);
              }
            },
            [i, e]
          );
        return { submitting: t, submitted: i, saveSettings: l };
      }
      async function j(e, t) {
        if (S.default.useNewNotifications) {
          u.default.show({
            title: "Info",
            body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!",
          });
          return;
        }
        let n = (function (e) {
          let t = Object.values(e)
              .filter(e => {
                var t;
                return (
                  (null !== (t = e.overrideMode) && void 0 !== t
                    ? t
                    : e.mode) === b.Mode.UseGreyDot
                );
              })
              .map(e => {
                var t;
                return {
                  plan: e,
                  memberCount:
                    null !== (t = h.default.getMemberCount(e.guildId)) &&
                    void 0 !== t
                      ? t
                      : 0,
                };
              }),
            n = {
              num_unread_guilds_before: y.default
                .keys(e)
                .filter(e => _.default.hasUnread(e)).length,
              unmuted_server_ids: t
                .filter(e => S.default.isMuted(e.plan.guildId))
                .map(e => e.plan.guildId),
            };
          return () => {
            T.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
              ...n,
              auto_migrated: !0,
              pre_selected_server_ids: Object.values(e)
                .filter(e => e.mode === b.Mode.UseGreyDot)
                .map(e => e.guildId),
              final_selected_server_ids: t.map(e => e.plan.guildId),
              num_unread_guids_after: y.default
                .keys(e)
                .filter(e => _.default.hasUnread(e)).length,
              num_tiny_servers_selected: t.filter(e => e.memberCount <= 20)
                .length,
              num_small_servers_selected: t.filter(
                e => e.memberCount > 20 && e.memberCount <= 200
              ).length,
              num_medium_servers_selected: t.filter(
                e => e.memberCount > 200 && e.memberCount <= 1e3
              ).length,
              num_large_servers_selected: t.filter(e => e.memberCount > 1e3)
                .length,
              num_quiet_servers_selected: t.filter(e => !e.plan.messagePain)
                .length,
              num_busy_servers_selected: t.filter(e => e.plan.messagePain)
                .length,
              num_frequent_visited_servers_selected: t.filter(
                e => e.plan.visitsALot
              ).length,
              num_infrequent_visited_servers_selected: t.filter(
                e => !e.plan.visitsALot
              ).length,
            });
          };
        })(e);
        try {
          let t = {};
          for (let n of Object.values(e)) {
            var a, i;
            let e =
                null !==
                  (a =
                    S.default.getAllSettings().userGuildSettings[n.guildId]) &&
                void 0 !== a
                  ? a
                  : {},
              s = {};
            for (let t of n.actions)
              null === (i = t.apply) || void 0 === i || i.call(t, s, e);
            t[n.guildId] = s;
          }
          await k(t);
          let s = Object.values(e)
            .filter(e => e.actions.some(e => e.needsMarkedAsRead))
            .map(e => e.guildId);
          if (s.length > 0) {
            let e = setTimeout(n, 5e3);
            (0, c.default)(s, void 0, () => {
              r.default.dispatch({ type: "RECOMPUTE_READ_STATES" }),
                clearTimeout(e),
                n();
            });
          } else n();
        } catch (e) {
          I.default.captureException(e),
            u.default.show({
              title: L.default.Messages.ERROR,
              body: L.default.Messages.NOTIF_MIGRATION_ERROR,
              onConfirm: t,
            });
        }
      }
      async function k(e) {
        await F(() => H()),
          await F(() =>
            d.default.setAccountFlag(
              O.AccountNotificationFlags.USE_NEW_NOTIFICATIONS,
              !0
            )
          );
        let t = await F(() => f.default.saveUserGuildSettingsBulk(e));
        r.default.dispatch({
          type: "USER_GUILD_SETTINGS_FULL_UPDATE",
          userGuildSettings: t,
        }),
          r.default.dispatch({ type: "RECOMPUTE_READ_STATES" });
      }
      async function F(e) {
        for (let e = 0; e < 3; e++)
          try {
            break;
          } catch (t) {
            await new Promise(t => setTimeout(t, 1e3 * (e + 1)));
          }
        return await e();
      }
      async function H() {
        let e = await (0, C.listSnapshots)();
        if (e.length > 0) {
          let t = await (function () {
            return new Promise(e => {
              u.default.show({
                title: "Create new Backup?",
                body: "It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?",
                confirmText: "Take New Backup",
                cancelText: "Skip Backup",
                onConfirm: () => e(!0),
                onCancel: () => e(!1),
              });
            });
          })();
          t && (0, C.backupSettings)(e);
        } else
          (0, C.takeSnapshot)(
            "Backup from ".concat(new Date().toLocaleDateString())
          );
      }
      async function B() {
        o.default.set("turnedOffNewNotifications", !0),
          T.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: Object.values(
              p.default.getGuilds()
            ).filter(
              e =>
                S.default.resolveGuildUnreadSetting(e) ===
                w.UnreadSetting.ONLY_MENTIONS
            ).length,
          });
        let e = await (0, C.listSnapshots)(),
          t = s.sortBy(e, e => new Date(e.recorded_at).getTime());
        if (t.length > 0) {
          let e = t[t.length - 1];
          await new Promise(t =>
            u.default.show({
              title: "Please Confirm",
              body:
                "This will turn off the new notification system and restore your " +
                "notification settings to a backup created on ".concat(
                  new Date(e.recorded_at).toLocaleDateString()
                ),
              onConfirm: t,
              cancelText: "Cancel",
              onCancel: () => {},
            })
          ),
            await (0, C.restoreSnapshot)(e.id),
            await d.default.setAccountFlag(
              O.AccountNotificationFlags.USE_NEW_NOTIFICATIONS,
              !1
            );
        } else
          await d.default.setAccountFlag(
            O.AccountNotificationFlags.USE_NEW_NOTIFICATIONS,
            !1
          );
      }
      function V(e) {
        var t, n, a;
        if (null == e) return [];
        let i = s.keyBy(
            null !== (t = e.voice_joins) && void 0 !== t ? t : [],
            "channel_id"
          ),
          l = s.keyBy(
            null !== (n = e.message_sends) && void 0 !== n ? n : [],
            "channel_id"
          );
        return (null !== (a = e.channel_opens) && void 0 !== a ? a : [])
          .map(e => {
            var t, n, a, s, o, r, u, d, c, f, g;
            let m = null !== (t = i[e.channel_id]) && void 0 !== t ? t : {},
              h = null !== (n = l[e.channel_id]) && void 0 !== n ? n : {};
            return {
              channel_id: e.channel_id,
              num_year_opens: Number(
                null !== (a = e.year_opens) && void 0 !== a ? a : 0
              ),
              num_month_opens: Number(
                null !== (s = e.one_month_opens) && void 0 !== s ? s : 0
              ),
              num_three_month_opens: Number(
                null !== (o = e.three_month_opens) && void 0 !== o ? o : 0
              ),
              num_six_month_opens: Number(
                null !== (r = e.six_month_opens) && void 0 !== r ? r : 0
              ),
              num_messages: Number(
                null !== (u = null == h ? void 0 : h.num_messages) &&
                  void 0 !== u
                  ? u
                  : 0
              ),
              num_year_voice_joins: Number(
                null !== (d = null == m ? void 0 : m.year_opens) && void 0 !== d
                  ? d
                  : 0
              ),
              num_month_voice_joins: Number(
                null !== (c = null == m ? void 0 : m.one_month_opens) &&
                  void 0 !== c
                  ? c
                  : 0
              ),
              num_three_month_voice_joins: Number(
                null !== (f = null == m ? void 0 : m.three_month_opens) &&
                  void 0 !== f
                  ? f
                  : 0
              ),
              num_six_month_voice_joins: Number(
                null !== (g = null == m ? void 0 : m.six_month_opens) &&
                  void 0 !== g
                  ? g
                  : 0
              ),
            };
          })
          .filter(N.isNotNullish);
      }
    },
    845868: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("424973"),
        n("222007"),
        n("702976"),
        n("808653");
      var a = n("917351"),
        i = n.n(a),
        s = n("233069"),
        l = n("870691"),
        o = n("42203"),
        r = n("350522"),
        u = n("319781"),
        d = n("957255"),
        c = n("282109"),
        f = n("718517"),
        g = n("568734"),
        m = n("449008"),
        h = n("380353"),
        _ = n("49111"),
        p = n("397336");
      function E(e, t, n, a, g) {
        if (t !== h.Mode.UseGreyDot)
          return [
            {
              label: "Setting the guild to a white dot unread",
              apply: (e, t) => {
                S(e, t, !0);
              },
            },
          ];
        let p = [],
          E = Object.values(
            o.default.getMutableGuildChannelsForGuild(e.id)
          ).filter(e => d.default.can(_.Permissions.VIEW_CHANNEL, e));
        return (
          p.push(
            ...(function (e, t) {
              let n =
                c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
              if (!n) return [];
              let a = [
                  {
                    label: "Unmuting the guild and marking it as read",
                    apply: e => {
                      (e.muted = !1), (e.mute_config = null);
                    },
                    needsMarkedAsRead: !0,
                  },
                ],
                i = t.filter(
                  t =>
                    c.default.getChannelMessageNotifications(e.id, t.id) ===
                    _.UserNotificationSettings.ALL_MESSAGES
                );
              return (
                i.length > 0 &&
                  a.push({
                    label: "Setting ".concat(
                      i.length,
                      " to mentions-only since they were all-messages and we are unmuting the guild"
                    ),
                    debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                    apply: (e, t) => {
                      for (let n of i)
                        T(e, t, n.id, e => {
                          e.message_notifications =
                            _.UserNotificationSettings.ONLY_MENTIONS;
                        });
                    },
                  }),
                a
              );
            })(e, E)
          ),
          p.push(
            (function (e) {
              let t = c.default.getMessageNotifications(e.id);
              if (t === _.UserNotificationSettings.ALL_MESSAGES)
                return {
                  label:
                    "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
                  apply: e => {
                    e.message_notifications =
                      _.UserNotificationSettings.ONLY_MENTIONS;
                  },
                };
            })(e)
          ),
          p.push(
            (function () {
              return {
                label: "Setting the guild to a grey dot unread",
                apply: (e, t) => {
                  S(e, t, !1);
                },
              };
            })()
          ),
          p.push(
            ...(function (e) {
              let t = [],
                [n, a] = i(e)
                  .filter(e => e.type === _.ChannelTypes.GUILD_ANNOUNCEMENT)
                  .partition(
                    e =>
                      c.default.isChannelMuted(e.guild_id, e.id) ||
                      (null != e.parent_id &&
                        c.default.isChannelMuted(e.guild_id, e.parent_id))
                  )
                  .value();
              return (
                n.length > 0 &&
                  t.push({
                    label: "Not touching ".concat(
                      n.length,
                      " announcement channels since they are muted"
                    ),
                    debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                  }),
                a.length > 0 &&
                  t.push({
                    label: "Setting ".concat(
                      a.length,
                      " announcement channels to white-dot"
                    ),
                    debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                    apply: (e, t) => {
                      for (let n of a) v(e, t, n.id, !0);
                    },
                  }),
                t
              );
            })(E)
          ),
          p.push(
            ...(function (e) {
              let t = [],
                n = [];
              for (let t of e)
                if (
                  c.default.isChannelMuted(t.guild_id, t.id) &&
                  t.isCategory()
                ) {
                  let e = l.default.isCollapsed(t.id);
                  !e && n.push(t);
                }
              return (
                n.length > 0 &&
                  t.push({
                    label: "Unmuting ".concat(
                      n.length,
                      " categories and setting to grey-dot"
                    ),
                    debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                    apply: (e, t) => {
                      for (let a of n)
                        v(e, t, a.id, !1),
                          T(e, t, a.id, e => {
                            (e.muted = !1), (e.mute_config = null);
                          });
                    },
                  }),
                t
              );
            })(E)
          ),
          p.push(
            ...(function (e) {
              let t = [],
                n = [],
                a = [];
              return (
                e.forEach(e => {
                  if (c.default.isChannelMuted(e.guild_id, e.id)) return;
                  let t = c.default.getChannelMessageNotifications(
                    e.guild_id,
                    e.id
                  );
                  t === _.UserNotificationSettings.ALL_MESSAGES
                    ? n.push(e)
                    : t === _.UserNotificationSettings.ONLY_MENTIONS &&
                      a.push(e);
                }),
                n.length > 0 &&
                  t.push({
                    label: "Setting ".concat(
                      n.length,
                      " channels to white-dot since they were explicitly All Messages"
                    ),
                    debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                    apply: (e, t) => {
                      for (let a of n) v(e, t, a.id, !0);
                    },
                  }),
                a.length > 0 &&
                  t.push({
                    label: "Setting ".concat(
                      a.length,
                      " channels to grey-dot since they were explicitly Mentions Only"
                    ),
                    debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                    apply: (e, t) => {
                      for (let n of a) v(e, t, n.id, !1);
                    },
                  }),
                t
              );
            })(E)
          ),
          r.default.hasConsented(_.Consents.PERSONALIZATION)
            ? p.push(
                ...(function (e, t, n, a, s) {
                  let l =
                    c.default.isMuted(e.id) &&
                    !c.default.isTemporarilyMuted(e.id);
                  if (l) return [];
                  let o = new Set(t.map(e => e.id)),
                    r = a.filter(e => o.has(e.channel_id)),
                    u = i.keyBy(r, "channel_id"),
                    d = Math.max(
                      n.messages === h.PainLevel.High
                        ? s.frecency.yearMinOpensLargeServer
                        : s.frecency.yearMinOpensSmallServer,
                      r.reduce((e, t) => {
                        var n;
                        return (
                          e +
                          Number(
                            null !== (n = t.num_year_opens) && void 0 !== n
                              ? n
                              : 0
                          )
                        );
                      }, 0) * s.frecency.totalOpensPercent
                    ),
                    f = Math.max(
                      s.frecency.monthMinOpens,
                      r.reduce((e, t) => {
                        var n;
                        return (
                          e +
                          Number(
                            null !== (n = t.num_three_month_opens) &&
                              void 0 !== n
                              ? n
                              : 0
                          )
                        );
                      }, 0) * s.frecency.totalOpensPercent
                    ),
                    g = [],
                    m = [];
                  t.forEach(e => {
                    var t, n, a, i;
                    let s = null !== (t = u[e.id]) && void 0 !== t ? t : {};
                    Number(
                      null !== (n = s.num_year_opens) && void 0 !== n ? n : 0
                    ) > d ||
                    Number(
                      null !== (a = s.num_month_opens) && void 0 !== a ? a : 0
                    ) > f
                      ? g.push(e)
                      : Number(
                          null !== (i = s.num_three_month_opens) && void 0 !== i
                            ? i
                            : 0
                        ) > 2 && m.push(e);
                  });
                  let _ = [];
                  return (
                    g.length > 0 &&
                      _.push({
                        label: "Setting ".concat(
                          g.length,
                          " channels to white-dot since they are recent and frequently viewed"
                        ),
                        debug: g
                          .map(e =>
                            "\n    - #"
                              .concat(e.name, " (")
                              .concat(JSON.stringify(u[e.id]), ")")
                          )
                          .join(""),
                        apply: (e, t) => {
                          for (let n of g) v(e, t, n.id, !0);
                        },
                      }),
                    m.length > 0 &&
                      _.push({
                        label: "NOT setting ".concat(
                          m.length,
                          " channels to white-dot because they were only viewed a little."
                        ),
                        debug: m
                          .map(e =>
                            "\n    - #"
                              .concat(e.name, " (")
                              .concat(JSON.stringify(u[e.id]), ")")
                          )
                          .join(""),
                      }),
                    _
                  );
                })(e, E, n, a, g)
              )
            : p.push(
                ...(function (e, t) {
                  let n =
                    c.default.isMuted(e.id) &&
                    !c.default.isTemporarilyMuted(e.id);
                  if (n) return [];
                  let a = [],
                    i = new Set(t.map(e => e.id)),
                    l = Date.now() - f.default.Millis.DAYS_30,
                    o = u.default
                      .getFrequentlyWithoutFetchingLatest()
                      .filter(
                        e => e instanceof s.ChannelRecordBase && i.has(e.id)
                      ),
                    r = o.filter(e => {
                      var t, n;
                      let a =
                        null !==
                          (n =
                            null ===
                              (t =
                                u.default.frecencyWithoutFetchingLatest
                                  .usageHistory[e.id]) || void 0 === t
                              ? void 0
                              : t.recentUses) && void 0 !== n
                          ? n
                          : [];
                      return 0 !== a.length && a[a.length - 1] >= l;
                    });
                  return (
                    r.length > 0 &&
                      a.push({
                        label: "Setting ".concat(
                          r.length,
                          " channels to white-dot since they are recent and frequently viewed"
                        ),
                        debug: r.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                          for (let n of r) v(e, t, n.id, !0);
                        },
                      }),
                    a
                  );
                })(e, E)
              ),
          p.filter(m.isNotNullish)
        );
      }
      function S(e, t, n) {
        var a, i;
        (e.flags = (0, g.setFlag)(
          null !== (i = null !== (a = e.flags) && void 0 !== a ? a : t.flags) &&
            void 0 !== i
            ? i
            : 0,
          p.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES,
          n
        )),
          (e.flags = (0, g.setFlag)(
            e.flags,
            p.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS,
            !n
          ));
      }
      function T(e, t, n, a) {
        var s, l, o, r;
        let u =
            null !==
              (o =
                null === (s = e.channel_overrides) || void 0 === s
                  ? void 0
                  : s[n]) && void 0 !== o
              ? o
              : {},
          d =
            null !==
              (r =
                null === (l = t.channel_overrides) || void 0 === l
                  ? void 0
                  : l[n]) && void 0 !== r
              ? r
              : {};
        a(u, d),
          !i.isEmpty(u) &&
            (null == e.channel_overrides && (e.channel_overrides = {}),
            (e.channel_overrides[n] = u));
      }
      function v(e, t, n, a) {
        T(e, t, n, (e, t) => {
          var n, i;
          (e.flags = (0, g.setFlag)(
            null !==
              (i = null !== (n = e.flags) && void 0 !== n ? n : t.flags) &&
              void 0 !== i
              ? i
              : 0,
            p.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES,
            a
          )),
            (e.flags = (0, g.setFlag)(
              e.flags,
              p.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS,
              !a
            ));
        });
      }
    },
    287223: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          guessGuildModeWithRemoteData: function () {
            return c;
          },
          guessGuildModeWithLocalData: function () {
            return g;
          },
        }),
        n("808653");
      var a = n("917351"),
        i = n.n(a),
        s = n("233069"),
        l = n("42203"),
        o = n("319781"),
        r = n("525065"),
        u = n("718517"),
        d = n("380353");
      function c(e, t, n, a, i) {
        var s, o, u, c;
        let g = l.default.getMutableGuildChannelsForGuild(e.id),
          m = a.filter(e => e.channel_id in g),
          h =
            null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s
              ? s
              : {},
          _ = r.default.getMemberCount(e.id),
          p = f("year", a, m, e => {
            var t;
            return Number(
              null !== (t = e.num_year_opens) && void 0 !== t ? t : 0
            );
          }),
          E = f("one month", a, m, e => {
            var t;
            return Number(
              null !== (t = e.num_month_opens) && void 0 !== t ? t : 0
            );
          }),
          S = f("three month", a, m, e => {
            var t;
            return Number(
              null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0
            );
          }),
          T = f("six month", a, m, e => {
            var t;
            return Number(
              null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0
            );
          }),
          v = [E, S, T, p],
          N = 0,
          I = 0;
        m.forEach(e => {
          var t;
          N++,
            (I +=
              null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0);
        });
        let y = "\n**Pain**:\n- Everyones: "
            .concat(
              d.PainLevel[null !== (o = h.everyones) && void 0 !== o ? o : 0],
              "\n- Messages: "
            )
            .concat(
              d.PainLevel[null !== (u = h.messages) && void 0 !== u ? u : 0],
              "\n- Size: "
            )
            .concat(_, "\n**Remote**:\n- Channels: ")
            .concat(N, "\n- AllVisits: ")
            .concat(
              v.map(e => e.totalOpensAcrossAllServers).join(" / "),
              "\n- GuildVisits: "
            )
            .concat(
              v.map(e => e.guildOpens).join(" / "),
              "\n- Biggest Channel (abs): "
            )
            .concat(
              v.map(e => e.biggestChannel).join(" / "),
              "\n- Biggest Channel (%): "
            )
            .concat(
              v.map(e => e.biggestChannelFormatted).join(" / "),
              "\n- Sent Msgs: "
            )
            .concat(I, "\n"),
          C = S.guildOpens >= 0.02 * S.totalOpensAcrossAllServers,
          A = (null !== (c = p.guildOpens) && void 0 !== c ? c : 0) > 0;
        if (h.messages === d.PainLevel.High) {
          if (!i) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y];
          if (!C && A) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y];
        }
        return [d.Mode.KeepAsIs, C, "KeepAsIs" + y];
      }
      function f(e, t, n, a) {
        let s = t.reduce((e, t) => e + a(t), 0),
          l = n.reduce((e, t) => e + a(t), 0),
          o = i.sortBy(n, a).reverse()[0],
          r = null == o ? 0 : a(o),
          u = ((r / l) * 100).toFixed(1);
        return {
          label: e,
          totalOpensAcrossAllServers: s,
          guildOpens: l,
          biggestChannel: r,
          biggestChannelFormatted: u,
        };
      }
      function g(e, t) {
        var n, a;
        let i =
            null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n
              ? n
              : {},
          l =
            null !== (a = r.default.getMemberCount(e.id)) && void 0 !== a
              ? a
              : 0,
          c = Date.now() - u.default.Millis.DAYS_30,
          f = o.default
            .getFrequentlyWithoutFetchingLatest()
            .filter(
              t => t instanceof s.ChannelRecordBase && t.guild_id === e.id
            ),
          g = f.filter(e => {
            var t, n;
            let a =
              null !==
                (n =
                  null ===
                    (t =
                      o.default.frecencyWithoutFetchingLatest.usageHistory[
                        e.id
                      ]) || void 0 === t
                    ? void 0
                    : t.recentUses) && void 0 !== n
                ? n
                : [];
            return 0 !== a.length && a[a.length - 1] >= c;
          }),
          m = g.length >= 5,
          h = f.reduce((e, t) => {
            var n, a;
            return (
              e +
              (null !==
                (a =
                  null ===
                    (n =
                      o.default.frecencyWithoutFetchingLatest.usageHistory[
                        t.id
                      ]) || void 0 === n
                    ? void 0
                    : n.totalUses) && void 0 !== a
                ? a
                : 0)
            );
          }, 0),
          _ = "\n- **Local**:\n    - Guild Visits: "
            .concat(h, "\n    - Channels: ")
            .concat(f.length, "\n    - Recent Channels: ")
            .concat(g.length, "\n");
        return i.messages === d.PainLevel.High || l > 1e3
          ? [d.Mode.UseGreyDot, m, "SuggestGreyDot" + _]
          : [d.Mode.KeepAsIs, m, "KeepAsIs" + _];
      }
    },
    748021: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openMigrationModal: function () {
            return m;
          },
          default: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var i = n("872717"),
        s = n("95410"),
        l = n("77078"),
        o = n("689988"),
        r = n("350522"),
        u = n("282109"),
        d = n("640497"),
        c = n("699668"),
        f = n("49111");
      class g extends o.default {
        async handlePostConnectionOpen() {
          if (
            s.default.get("turnedOffNewNotifications") ||
            !r.default.hasConsented(f.Consents.PERSONALIZATION) ||
            !d.NotificationsExperiment.getCurrentConfig(
              { location: "NotificationMigrationManager" },
              { autoTrackExposure: !1 }
            ).enabled ||
            u.default.useNewNotifications
          )
            return;
          let { logExposure: e, autoOpen: t } =
            d.UnreadsEntryPointExperiment.getCurrentConfig(
              { location: "NotificationMigrationManager" },
              { autoTrackExposure: !1 }
            );
          if (!e) return;
          let {
              body: { guild_noise: o, usage: g },
            } = await i.default.get("/users/@me/notification-migration-data2"),
            m = (0, c.transformUsageData)(g),
            { default: h } = await n.el("923660").then(n.bind(n, "923660"));
          if (!(0, l.hasAnyModalOpen)())
            d.UnreadsEntryPointExperiment.trackExposure({
              location: "NotificationMigrationManager",
            }),
              t &&
                ((0, c.hasGoodCandidateServers)(o, m)
                  ? (0, l.openModal)(
                      e =>
                        (0, a.jsx)(h, {
                          ...e,
                          dismissable: !1,
                          guildPain: o,
                          myUsage: m,
                        }),
                      { onCloseRequest: () => {} }
                    )
                  : (0, c.autoMigrateToNewSystem)());
        }
        constructor(...e) {
          super(...e),
            (this.actions = {
              POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
            });
        }
      }
      async function m(e) {
        let {
            body: { guild_noise: t, usage: s },
          } = await i.default.get("/users/@me/notification-migration-data2"),
          o = (0, c.transformUsageData)(s);
        (0, l.openModalLazy)(async () => {
          let { default: i } = await n.el("923660").then(n.bind(n, "923660"));
          return n =>
            (0, a.jsx)(i, { ...n, dismissable: e, guildPain: t, myUsage: o });
        });
      }
      var h = new g();
    },
    505093: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setUseSystemTheme: function () {
            return i;
          },
        });
      var a = n("913144");
      function i(e) {
        a.default.dispatch({
          type: "UNSYNCED_USER_SETTINGS_UPDATE",
          settings: { useSystemTheme: e },
        });
      }
      n("228803"), n("168973"), n("116319");
    },
    225849: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("884691"),
        i = n("446674"),
        s = n("79112"),
        l = n("206230"),
        o = n("26092"),
        r = n("397336"),
        u = n("49111");
      let d = Object.freeze({
        [r.UserSettingsScrollPositions.ProfileCustomizationScrollPositions
          .TRY_IT_OUT]: u.UserSettingsSections.PROFILE_CUSTOMIZATION,
        [r.UserSettingsScrollPositions.AccessibilityScrollPositions
          .REDUCED_MOTION]: u.UserSettingsSections.ACCESSIBILITY,
        [r.UserSettingsScrollPositions.AccessibilityScrollPositions
          .SYNC_PROFILE_THEME_WITH_USER_THEME]:
          u.UserSettingsSections.ACCESSIBILITY,
        [r.UserSettingsScrollPositions.AccessibilityScrollPositions
          .LEGACY_CHAT_INPUT]: u.UserSettingsSections.ACCESSIBILITY,
        [r.UserSettingsScrollPositions.VoiceAndVideoScrollPositions
          .HARDWARE_ACCELERATION]: u.UserSettingsSections.VOICE,
        [r.UserSettingsScrollPositions.AppearanceScrollPositions
          .CUSTOM_APP_ICONS]: u.UserSettingsSections.APPEARANCE,
      });
      var c = (e, t) => {
        let n = (0, i.useStateFromStores)(
            [l.default],
            () => l.default.useReducedMotion
          ),
          r = (0, i.useStateFromStores)([o.default], () =>
            o.default.getScrollPosition()
          );
        (0, a.useEffect)(() => {
          let a = e.current;
          if (null == a || t !== r) return;
          let i = requestAnimationFrame(() => {
            a.scrollIntoView({ behavior: n ? "auto" : "smooth" }),
              s.default.clearScrollPosition(d[t]);
          });
          return () => cancelAnimationFrame(i);
        }, [e, t, r, n]);
      };
    },
    900158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ExperimentalLootboxIcon: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, s.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M23 6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v4.5c0 .28.22.5.5.5h7c.22 0 .41-.14.5-.34.53-1.3 1.68-2.41 3-2.41s2.47 1.11 3 2.4c.09.2.28.35.5.35h7a.5.5 0 0 0 .5-.5V6ZM23 13.5a.5.5 0 0 0-.5-.5h-7c-.22 0-.41.14-.5.34-.53 1.3-1.68 2.41-3 2.41s-2.47-1.11-3-2.4a.54.54 0 0 0-.5-.35h-7a.5.5 0 0 0-.5.5V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-4.5Z",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=46150.43b84b503bd4c6a29a75.js.map
