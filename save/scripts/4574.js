(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4574"],
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
      var i = n("811022"),
        a = n("872717"),
        s = n("448993"),
        l = n("42887"),
        o = n("254490"),
        r = n("49671"),
        u = n("49111");
      let d = new i.Logger("uploadRtcLogFiles");
      async function c(e, t) {
        let n;
        if (null == r.default.fileManager.readLogFiles)
          throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
        let i = [];
        try {
          i = (i = await r.default.fileManager.readLogFiles(e)).map(e =>
            (0, o.transformNativeFile)(e, "application/octet-stream")
          );
        } catch (e) {
          throw (
            (d.error("uploadDebugFiles: read error '".concat(e, "'")),
            new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.READ))
          );
        }
        if (0 === i.length)
          throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.NO_FILE);
        try {
          let e = { extraInfo: t, mediaEngineState: l.default.getState() };
          n = await a.HTTP.post({
            url: u.Endpoints.DEBUG_LOGS(u.DebugLogCategory.RTC),
            attachments: [
              ...i.map(e => ({ name: e.name, file: e, filename: e.name })),
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
        let c = i.length + 1;
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
      var i = n("37983"),
        a = n("884691"),
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
          [h, p] = a.useState(g.ICONS_BY_ID[t].name),
          S = t === c.PremiumAppIconIds.PIRATE,
          T = (0, u.useRadioItem)({ label: h, isSelected: o });
        return (0, i.jsx)(u.Tooltip, {
          text: h,
          onTooltipShow: () => S && p(E()),
          children: e =>
            (0, i.jsxs)("div", {
              className: _.appIconSelectionContainer,
              children: [
                (0, i.jsx)(u.Clickable, {
                  ...e,
                  ...T,
                  tabIndex: null != r ? r : T.tabIndex,
                  className: l(_.appIconSelection, { [_.selected]: o }, n),
                  onClick: o ? m.NOOP : () => (null == s ? void 0 : s(t)),
                  children: f,
                }),
                o && (0, i.jsx)(d.SelectionCircle, {}),
              ],
            }),
        });
      }
      function S(e) {
        let {
          icon: t,
          isSelected: n,
          disabled: a,
          tabIndex: s,
          onSelect: l,
        } = e;
        return (0, i.jsx)(Selection, {
          onSelect: a ? void 0 : l,
          isSelected: n,
          id: t.id,
          className: a ? _.disabled : void 0,
          tabIndex: s,
          children: (0, i.jsx)(f.default, {
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
      var i = n("37983"),
        a = n("884691"),
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
          T = a.useRef(null);
        (0, u.default)(T, m.AppearanceScrollPositions.CUSTOM_APP_ICONS);
        let v = (0, d.useUID)(),
          N = (0, l.useRadioGroup)({
            orientation: "horizontal",
            labelledBy: v,
          }),
          I = e => {
            o.default.dispatch({ type: "APP_ICON_UPDATED", id: e });
          };
        return (0, i.jsx)("div", {
          ref: T,
          children: (0, i.jsx)("div", {
            ...N,
            className: _.container,
            children: (0, i.jsxs)("div", {
              className: t,
              children: [
                (0, i.jsxs)("div", {
                  className: _.header,
                  children: [
                    (0, i.jsxs)("div", {
                      className: _.headings,
                      children: [
                        S
                          ? null
                          : (0, i.jsxs)("div", {
                              className: _.title,
                              children: [
                                (0, i.jsx)(l.Heading, {
                                  variant: "text-md/medium",
                                  children:
                                    h.default.Messages.APP_ICON_SETTINGS_TITLE,
                                }),
                                (0, i.jsx)(r.default, {
                                  className: _.premiumIcon,
                                }),
                              ],
                            }),
                        (0, i.jsx)(l.Heading, {
                          variant: "text-sm/normal",
                          children:
                            h.default.Messages.APP_ICON_SETTINGS_DESCRIPTION,
                        }),
                      ],
                    }),
                    null == p ? void 0 : p(),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: _.presets,
                  children: g.ICONS.filter(e => {
                    let { isHidden: t } = e;
                    return !0 !== t;
                  }).map((e, t) =>
                    (0, i.jsx)(
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
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("234222");
      function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        !(!e && (0, a.hasAnyModalOpen)()) &&
          (0, a.openModalLazy)(
            async () => {
              let { default: e } = await n
                .el("170935")
                .then(n.bind(n, "170935"));
              return t => (0, i.jsx)(e, { ...t });
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
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var a = e => {
        let { fill: t, className: n } = e;
        return (0, i.jsxs)("svg", {
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
            (0, i.jsx)("g", {
              id: "Frame_-_24px",
              children: (0, i.jsx)("rect", {
                y: "0",
                fill: "none",
                width: "24",
                height: "24",
              }),
            }),
            (0, i.jsx)("g", {
              id: "Filled_Icons",
              children: (0, i.jsxs)("g", {
                children: [
                  (0, i.jsx)("path", {
                    fill: t,
                    d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10    C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z",
                  }),
                  (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
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
        return (0, i.jsx)("div", {
          className: E.selectionCircle,
          children: (0, i.jsx)(g.default, {
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
            style: a,
            onSelect: l,
            isSelected: o = !1,
            tabIndex: r,
            children: u,
          } = e,
          d = (0, c.useRadioItem)({ label: t, isSelected: o });
        return (0, i.jsx)(c.Tooltip, {
          text: t,
          children: e =>
            (0, i.jsxs)("div", {
              className: E.themeSelectionContainer,
              children: [
                (0, i.jsx)(c.Clickable, {
                  ...e,
                  ...d,
                  tabIndex: null != r ? r : d.tabIndex,
                  className: s(E.themeSelection, { [E.selected]: o }, n),
                  style: a,
                  onClick: o ? _.NOOP : l,
                  children: u,
                }),
                o && (0, i.jsx)(S, {}),
              ],
            }),
        });
      }
      function v(e) {
        let { theme: t, isSelected: n, onSelect: a } = e,
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
        return (0, i.jsx)(T, {
          onSelect: a,
          isSelected: n,
          name: v,
          className: s(E.defaultThemeSelection, S),
          children:
            "system" === t &&
            (0, i.jsx)("div", {
              className: E.iconWrapper,
              children: N
                ? (0, i.jsx)(u.RefreshIcon, { color: m(g) })
                : (0, i.jsx)(h.default, { fill: m(g) }),
            }),
        });
      }
      function N(e) {
        let {
            preset: t,
            isSelected: n,
            disabled: a,
            tabIndex: l,
            onSelect: o,
          } = e,
          { colors: r, angle: u, theme: c } = t,
          f = (0, m.getLinearGradientForBackgroundGradient)({
            colors: r,
            angle: u,
          });
        return (0, i.jsx)(T, {
          onSelect: a ? void 0 : o,
          isSelected: n,
          name: t.getName(),
          className: s([
            a ? E.disabled : null,
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
            return i;
          },
          trackClientThemeUpdated: function () {
            return F;
          },
          default: function () {
            return W;
          },
        }),
        n("794252"),
        n("222007");
      var i,
        a,
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
        M = n("476765"),
        A = n("599110"),
        O = n("32531"),
        b = n("714657"),
        P = n("164546"),
        w = n("941719"),
        R = n("49111"),
        D = n("646718"),
        L = n("116319"),
        x = n("397336"),
        U = n("843455"),
        G = n("782340"),
        j = n("845797");
      ((a = i || (i = {})).EDITOR = "EDITOR"), (a.SETTINGS = "SETTINGS");
      let k = Object.freeze({
          EDITOR: x.UserSettingsDelay.SLOW_USER_ACTION,
          SETTINGS: x.UserSettingsDelay.INFREQUENT_USER_ACTION,
        }),
        H = l.createContext({}),
        F = e => {
          let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
          A.default.track(R.AnalyticEvents.CLIENT_THEME_UPDATED, {
            feature_name: D.AnalyticsPremiumFeatureNames.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: i,
          });
        },
        B = e => {
          let { type: t, isPreview: n, isCoachmark: i } = e,
            a = (0, u.match)({ type: t, isPreview: n, isCoachmark: i })
              .with(
                { type: "EDITOR", isCoachmark: !0, isPreview: !0 },
                () =>
                  G.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER
              )
              .with(
                { type: "EDITOR", isCoachmark: !0 },
                () =>
                  G.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER
              )
              .otherwise(
                () =>
                  G.default.Messages
                    .USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE
              );
          return (0, s.jsxs)("div", {
            className: j.title,
            children: [
              (0, s.jsx)(g.Heading, {
                "aria-label": a,
                variant: "text-md/medium",
                children: a,
              }),
              (0, s.jsx)(v.default, { className: j.premiumIcon }),
            ],
          });
        },
        V = e => {
          var t, n;
          let { type: i, isPreview: a, isCoachmark: l } = e,
            o =
              (null === (n = (0, S.usePremiumTrialOffer)()) || void 0 === n
                ? void 0
                : null === (t = n.subscription_trial) || void 0 === t
                  ? void 0
                  : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
          if (o && a) return null;
          let r = (0, u.match)({ type: i, isPreview: a, isCoachmark: l })
            .with({ type: "EDITOR", isPreview: !0 }, () =>
              G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format(
                { onPremiumClick: E.navigateToPremiumMarketingPage }
              )
            )
            .with(
              { type: "EDITOR", isCoachmark: !0 },
              () =>
                G.default.Messages
                  .CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK
            )
            .with(
              { type: "EDITOR", isPreview: !1 },
              () => G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION
            )
            .with({ isPreview: !0 }, () =>
              G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format(
                { onPremiumClick: E.navigateToPremiumMarketingPage }
              )
            )
            .otherwise(
              () =>
                G.default.Messages
                  .CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS
            );
          return (0, s.jsx)(g.Heading, {
            variant: "text-sm/normal",
            children: r,
          });
        },
        K = e => {
          let { type: t, children: n } = e,
            i = (0, M.useUID)(),
            a = (0, g.useRadioGroup)({
              orientation: "horizontal",
              labelledBy: i,
            }),
            o = l.useMemo(() => ({ type: t, delay: k[t] }), [t]);
          return (0, s.jsx)(H.Provider, {
            value: o,
            children: (0, s.jsx)("div", {
              ...a,
              className: j.container,
              children: n,
            }),
          });
        };
      (K.Basic = e => {
        let { className: t } = e,
          { delay: n } = l.useContext(H),
          { analyticsLocations: i } = (0, p.default)(
            _.default.CLIENT_THEMES_THEME_SELECTOR
          ),
          [a, o, u] = (0, d.useStateFromStoresArray)(
            [I.default, y.default, b.default],
            () => [
              I.default.theme,
              null == b.default.gradientPreset,
              y.default.useSystemTheme === L.SystemThemeState.ON,
            ]
          ),
          c = e => {
            (0, O.resetBackgroundGradientPreset)(),
              F({
                isPersisted: !0,
                analyticsLocations: i,
                themeName: "default ".concat(e),
              }),
              (0, m.saveClientTheme)({ theme: e }, n);
          };
        return (0, s.jsxs)("section", {
          className: r(j.presets, t),
          children: [
            (0, s.jsx)(P.DefaultThemeSelection, {
              theme: U.ThemeTypes.LIGHT,
              isSelected: o && !u && (0, f.isThemeLight)(a),
              onSelect: () => c(U.ThemeTypes.LIGHT),
            }),
            (0, s.jsx)(P.DefaultThemeSelection, {
              theme: U.ThemeTypes.DARK,
              isSelected: o && !u && (0, f.isThemeDark)(a),
              onSelect: () => c(U.ThemeTypes.DARK),
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
          var t, i;
          let { className: a, renderCTAButtons: o, disabled: r = !1 } = e,
            { type: u, delay: f } = l.useContext(H),
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
            [M, A] = l.useState(!1),
            [R, x] = l.useState(-1),
            U = (0, d.useStateFromStores)(
              [h.default],
              () => h.default.useReducedMotion
            ),
            k =
              (null === (i = (0, S.usePremiumTrialOffer)()) || void 0 === i
                ? void 0
                : null === (t = i.subscription_trial) || void 0 === t
                  ? void 0
                  : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
          l.useEffect(() => {
            ((R === w.BACKGROUND_GRADIENT_PRESETS.length - 2 &&
              "EDITOR" === u) ||
              y === c.BackgroundGradientPresetId.EASTER_EGG) &&
              A(!0);
          }, [R, u, y]);
          let K = (e, t) => {
            if (
              ((0, O.updateBackgroundGradientPreset)(e.id),
              F({
                isPersisted: !v,
                analyticsLocations: g,
                themeName: c.BackgroundGradientPresetId[e.id],
              }),
              v)
            ) {
              (0, N.setUseSystemTheme)(L.SystemThemeState.OFF);
              return;
            }
            if (
              ((0, m.saveClientTheme)(
                { backgroundGradientPresetId: e.id, theme: e.theme },
                f
              ),
              null != t)
            ) {
              if ((M && A(!1), t <= R || 0 === t)) {
                x(0);
                return;
              }
              x(e => e + 1);
            }
          };
          return (0, s.jsxs)("section", {
            className: a,
            children: [
              "EDITOR" === u && v && k
                ? (0, s.jsx)(T.default, {
                    type: D.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                    children:
                      G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format(
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
                    if (!M) return null;
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
                          shouldAnimate: !U,
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
      var i = n("872717"),
        a = n("890747"),
        s = n("42203"),
        l = n("821316"),
        o = n("605250"),
        r = n("836403"),
        u = n("825287"),
        d = n("929331"),
        c = n("49111");
      let f = new o.default("DebugUploadManager");
      async function g(e, t) {
        await m(e), await (0, a.uploadRtcLogFiles)(14680064, t);
      }
      async function m(e) {
        try {
          let t = l.stringify(),
            n = "",
            a = await (0, r.getPushNotificationLogs)().then(e =>
              (0, r.serializePushNotificationLogs)(e, !0)
            ),
            o = t.length + n.length + a.length;
          if (o > 9437184) {
            let e = 1 - 9437184 / o;
            (t = t.slice(t.length - Math.floor(t.length * e))),
              (n = n.slice(n.length - Math.floor(n.length * e))),
              (a = a.slice(a.length - Math.floor(a.length * e)));
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
              .concat(a, "\n    ");
          l.clear();
          let m = c.Endpoints.DEBUG_LOG(e, "discord_app_logs");
          await i.HTTP.post({
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
      var i = n("95410"),
        a = n("271938"),
        s = n("49111");
      function l(e, t) {
        if (0 === e.length) return "No logs";
        let n = i.Storage.get(s.DEVICE_TOKEN),
          a = i.Storage.get(s.DEVICE_VOIP_TOKEN),
          l = e
            .map(e => {
              let n = e.silent ? "Silent" : "Displayed",
                i = t
                  ? "".concat(e.channelId, " - ").concat(e.messageId)
                  : "".concat(e.title, " - ").concat(e.content);
              return ""
                .concat(new Date(e.receivedTimestamp).toISOString(), " [")
                .concat(e.type, "] ")
                .concat(n, " - ")
                .concat(i);
            })
            .join("\n");
        return ""
          .concat(null != n ? "Device Token: ".concat(n) : "", "\n")
          .concat(null != a ? "Device Voip Token: ".concat(a) : "", "\n\n")
          .concat(l);
      }
      async function o() {
        let e = a.default.getId(),
          t = [];
        return t;
      }
    },
    825287: function (e, t, n) {
      "use strict";
      function i() {
        return {
          logsUploaded: new Date().toISOString(),
          releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
          buildNumber: "279030",
          versionHash: "3f04d86f00f445e1d15f9bc950aa4c5b10195436",
        };
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
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
      var i = n("917351"),
        a = n.n(i),
        s = n("102053"),
        l = n("487269");
      function o(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return s.default.logGroups
          .map(i => {
            var s, o;
            let {
                index: u,
                timestamp: d,
                logs: c,
                nativeLogs: f,
                serverTrace: g,
              } = i,
              m =
                0 === u
                  ? null !==
                      (o =
                        null ===
                          (s = a.find(
                            c,
                            e => e.log.indexOf("Logger loaded") >= 0
                          )) || void 0 === s
                          ? void 0
                          : s.timestamp) && void 0 !== o
                    ? o
                    : e
                  : d,
              h = (function (e, t) {
                var n, i;
                let s = (function (e) {
                    let t = [];
                    for (let n = 0; n < e.length; n++) {
                      let i = e[n],
                        a = e[n + 1];
                      null != a && a.log === i.log.replace("Start ", "Finish ")
                        ? ((a.log = a.log.replace("Finish ", "")),
                          t.push(a),
                          n++)
                        : t.push(i);
                    }
                    return t;
                  })(e).map(e => {
                    let n =
                        null == e.timestamp
                          ? ""
                          : ((e.timestamp - t) / 1e3).toFixed(3),
                      i = null == e.delta ? "" : String(Math.round(e.delta));
                    return {
                      totalTime: n,
                      deltaTime: i,
                      log: ""
                        .concat(
                          e.emoji.length > 0 ? "".concat(e.emoji, " ") : ""
                        )
                        .concat(e.prefix)
                        .concat(e.log, "\n"),
                    };
                  }),
                  l =
                    null !== (n = a.max(s.map(e => e.totalTime.length))) &&
                    void 0 !== n
                      ? n
                      : 0,
                  o =
                    null !== (i = a.max(s.map(e => e.deltaTime.length))) &&
                    void 0 !== i
                      ? i
                      : 0;
                return s
                  .map(e => {
                    let { totalTime: t, deltaTime: n, log: i } = e;
                    return ""
                      .concat(a.padStart(t, l), " ")
                      .concat(a.padStart(n, o), " ")
                      .concat(i);
                  })
                  .join("");
              })(
                (function (e, t, n, i) {
                  e = e.slice();
                  let a = new Set(t.map(r)),
                    s = "",
                    l = [];
                  t.forEach(t => {
                    let i = r(t),
                      o = 0,
                      u = n || !t.autoGenerated,
                      d =
                        i.startsWith("Start ") &&
                        !i.includes("RUN_JS_BUNDLE") &&
                        a.has(i.replace("Start ", "Finish ")),
                      c =
                        i.startsWith("Finish ") &&
                        !i.includes("RUN_JS_BUNDLE") &&
                        a.has(i.replace("Finish ", "Start "));
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
                            })(i))),
                        (e.shouldKeep = e.shouldKeep || u));
                    }
                    let f = {
                      emoji: "☕",
                      timestamp: t.timestamp,
                      delta: o > 0 ? o : void 0,
                      prefix: s,
                      log: i,
                      shouldKeep: u,
                    };
                    (function (e, t) {
                      let n = 0;
                      for (; n < e.length; n++) {
                        let { timestamp: i } = e[n];
                        if (null != i && i > t.timestamp) break;
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
                        (!i && "\uD83C\uDFA8" === e.emoji) ||
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
            return u;
          },
          LOOTBOX_COUNT_STAT_FETCH_DELAY_MIN: function () {
            return d;
          },
          LOOTBOX_COUNT_STAT_FETCH_DELAY_MAX: function () {
            return c;
          },
          LOOTBOX_VIDEO_ID: function () {
            return f;
          },
          LOOTBOX_VIDEO_URL: function () {
            return g;
          },
        });
      var i,
        a,
        s = n("718517"),
        l = n("782340"),
        o = n("262228");
      let r = n("22247");
      ((i = a || (a = {})).ITEM_1 = "1214340999644446720"),
        (i.ITEM_2 = "1214340999644446721"),
        (i.ITEM_3 = "1214340999644446722"),
        (i.ITEM_4 = "1214340999644446723"),
        (i.ITEM_5 = "1214340999644446724"),
        (i.ITEM_6 = "1214340999644446725"),
        (i.ITEM_7 = "1214340999644446726"),
        (i.ITEM_8 = "1214340999644446727"),
        (i.ITEM_9 = "1214340999644446728");
      let u = () => ({
          "1214340999644446720": {
            name: l.default.Messages.PACKAGE_ITEM_1_NAME,
            image: o,
            sound: r,
          },
          "1214340999644446721": {
            name: l.default.Messages.PACKAGE_ITEM_2_NAME,
            image: o,
            sound: r,
          },
          "1214340999644446722": {
            name: l.default.Messages.PACKAGE_ITEM_3_NAME,
            image: o,
            sound: r,
          },
          "1214340999644446723": {
            name: l.default.Messages.PACKAGE_ITEM_4_NAME,
            image: o,
            sound: r,
          },
          "1214340999644446724": {
            name: l.default.Messages.PACKAGE_ITEM_5_NAME,
            image: o,
            sound: r,
          },
          "1214340999644446725": {
            name: l.default.Messages.PACKAGE_ITEM_6_NAME,
            image: o,
            sound: r,
          },
          "1214340999644446726": {
            name: l.default.Messages.PACKAGE_ITEM_7_NAME,
            image: o,
            sound: r,
          },
          "1214340999644446727": {
            name: l.default.Messages.PACKAGE_ITEM_8_NAME,
            image: o,
            sound: r,
          },
          "1214340999644446728": {
            name: l.default.Messages.PACKAGE_ITEM_9_NAME,
            image: o,
            sound: r,
          },
        }),
        d = s.default.Millis.MINUTE,
        c = s.default.Millis.MINUTE + 10 * s.default.Millis.SECOND,
        f = "KqmVR9PeYBs",
        g = "https://www.youtube.com/watch?v=".concat(f);
    },
    447845: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("862205");
      let a = (0, i.createExperiment)({
        kind: "user",
        id: "2024-03_packages",
        label: "Packages",
        defaultConfig: { allowOpeningLootboxes: !1, showMainEntrypoints: !1 },
        treatments: [
          {
            id: 1,
            label: "Allow users to open packages",
            config: { allowOpeningLootboxes: !0, showMainEntrypoints: !0 },
          },
          {
            id: 2,
            label: "Allow users to open packages 2",
            config: { allowOpeningLootboxes: !0, showMainEntrypoints: !1 },
          },
        ],
      });
      var s = a;
    },
    724001: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("82169"),
        s = n("669491");
      function l(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...r
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3 8C3 5.79086 4.79086 4 7 4C9.20914 4 11 5.79086 11 8V13C11 13.5523 10.5523 14 10 14H4C3.44772 14 3 13.5523 3 13V8ZM5 10C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H6V7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7V8H9.14286C9.61624 8 10 8.38376 10 8.85714V9.14286C10 9.61624 9.61624 10 9.14286 10H7.42857H6.57143H5Z",
              fill: "string" == typeof l ? l : l.css,
              className: o,
            }),
            (0, i.jsx)("path", {
              d: "M10 16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V21C14 21.5523 13.5523 22 13 22H11C10.4477 22 10 21.5523 10 21V16Z",
              fill: "string" == typeof l ? l : l.css,
              className: o,
            }),
            (0, i.jsx)("path", {
              d: "M10.6178 4.29252C10.4697 4.22237 10.5197 4 10.6836 4H17C19.2092 4 21 5.79087 21 8.00001L21 13C21 13.5523 20.5523 14 20 14H12.8774C12.4548 14 12.1121 13.6574 12.1121 13.2347V6.65331C12.1121 5.64373 11.5303 4.72454 10.6178 4.29252V4.29252Z",
              fill: "string" == typeof l ? l : l.css,
              className: o,
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14 4C14 3.44772 14.4477 3 15 3V3C15.5523 3 16 2.55228 16 2V2C16 1.44772 15.5523 1 15 1H13C12.4477 1 12 1.44772 12 2V2V3V4C12 4.55228 12.4477 5 13 5V5C13.5523 5 14 4.55228 14 4V4Z",
              fill: "string" == typeof l ? l : l.css,
              className: o,
            }),
          ],
        });
      }
      function o(e) {
        return (0, i.jsx)(l, { ...e });
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
      var i = n("37983"),
        a = n("884691"),
        s = n("414456"),
        l = n.n(s),
        o = n("917351"),
        r = n.n(o),
        u = n("146606"),
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
          [o, m] = a.useState({ x: 0, y: 0 }),
          h = a.useMemo(
            () =>
              r.throttle(e => {
                if (s) return;
                let t = (window.innerWidth - e.pageX * n) / 90,
                  i = (window.innerHeight - e.pageY * n) / 90;
                m({ x: t, y: i });
              }, 20),
            [n, s]
          );
        a.useEffect(
          () => (
            window.addEventListener("mousemove", h),
            () => window.removeEventListener("mousemove", h)
          ),
          [h]
        );
        let [_, p] = (0, u.useSpring)(() => ({ x: 0, y: 0, config: g }));
        return (
          a.useEffect(() => {
            p({ x: o.x, y: o.y });
          }, [o.x, o.y, p]),
          (0, i.jsx)(u.animated.div, {
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
      var i = n("917351"),
        a = n.n(i),
        s = n("872717"),
        l = n("49111");
      async function o() {
        return (await s.HTTP.get(l.Endpoints.NOTIFICATION_SNAPSHOTS)).body;
      }
      async function r(e) {
        return (
          await s.HTTP.post({
            url: l.Endpoints.NOTIFICATION_SNAPSHOTS,
            body: { label: e },
          })
        ).body;
      }
      async function u(e) {
        return (await s.HTTP.post(l.Endpoints.RESTORE_NOTIFICATION_SNAPSHOT(e)))
          .body;
      }
      async function d(e) {
        return (await s.HTTP.del(l.Endpoints.NOTIFICATION_SNAPSHOT(e))).body;
      }
      async function c(e) {
        if (e.length > 0) {
          var t;
          let n = a.sum(e.map(e => e.length)),
            i =
              null !== (t = a.max(e.map(e => e.length))) && void 0 !== t
                ? t
                : 0;
          if (e.length >= 5 || n + i > 1e6) {
            let t = a.sortBy(e, e => new Date(e.recorded_at).getTime());
            await d(t[0].id);
          }
        }
        return r("Backup from ".concat(new Date().toLocaleDateString()));
      }
    },
    380353: function (e, t, n) {
      "use strict";
      var i, a, s, l;
      n.r(t),
        n.d(t, {
          Mode: function () {
            return i;
          },
          PainLevel: function () {
            return a;
          },
          defaultThresholds: function () {
            return o;
          },
        }),
        ((s = i || (i = {}))[(s.KeepAsIs = 0)] = "KeepAsIs"),
        (s[(s.UseGreyDot = 1)] = "UseGreyDot"),
        ((l = a || (a = {}))[(l.Low = 0)] = "Low"),
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
            return L;
          },
          hasGoodCandidateServers: function () {
            return x;
          },
          autoMigrateToNewSystem: function () {
            return U;
          },
          useSaveSettings: function () {
            return G;
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
      var i = n("884691"),
        a = n("917351"),
        s = n.n(a),
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
        M = n("845868"),
        A = n("287223"),
        O = n("76618"),
        b = n("380353"),
        P = n("49111"),
        w = n("133335"),
        R = n("397336"),
        D = n("782340");
      function L(e, t) {
        let [n, a] = i.useState(b.defaultThresholds),
          [o, r] = i.useState({});
        (0, g.useFrecencySettings)();
        let u = (0, l.useStateFromStoresArray)([p.default], () =>
            Object.values(p.default.getGuilds())
          ),
          d = i.useCallback(() => {
            let i = {};
            for (let a of u)
              i[a.id] = (function (e, t, n, i, a) {
                var s;
                let [l, o, r] = m.default.hasConsented(
                    P.Consents.PERSONALIZATION
                  )
                    ? (0, A.guessGuildModeWithRemoteData)(e, t, n, i, !0)
                    : (0, A.guessGuildModeWithLocalData)(e, n),
                  u =
                    null !== (s = n.filter(t => t.guild_id === e.id)[0]) &&
                    void 0 !== s
                      ? s
                      : {},
                  d = (0, M.default)(e, null != a ? a : l, u, i, t);
                return {
                  guildId: e.id,
                  mode: l,
                  debugReason: r,
                  actions: d,
                  overrideMode: a,
                  messagePain: u.messages === b.PainLevel.High,
                  visitsALot: o,
                  muted:
                    S.default.isMuted(e.id) &&
                    !S.default.isTemporarilyMuted(e.id),
                };
              })(a, n, e, t, o[a.id]);
            return i;
          }, [u, n, e, t, o]),
          [c, f] = i.useState(() => d());
        i.useEffect(() => f(d()), [d]);
        let h = i.useCallback((e, t) => {
          r(n => ({ ...n, [e]: t }));
        }, []);
        return {
          guildPlans: c,
          overrideGuild: h,
          setThresholds: a,
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
                i = t.reduce((e, t) => {
                  var n;
                  return (
                    e +
                    Number(
                      null !== (n = t.num_month_opens) && void 0 !== n ? n : 0
                    )
                  );
                }, 0),
                a = E.default.getFlattenedGuildIds(),
                l = s.sortBy(Object.values(e), e => {
                  let t = a.indexOf(e.guildId);
                  return -1 === t ? a.length : t;
                }),
                o = [
                  ["Use Grey Dot", new Set([b.Mode.UseGreyDot])],
                  ["Keep As Is", new Set([b.Mode.KeepAsIs])],
                ].map(e => {
                  let [t, n] = e,
                    i = l.filter(e => {
                      var t;
                      return n.has(
                        null !== (t = e.overrideMode) && void 0 !== t
                          ? t
                          : e.mode
                      );
                    }),
                    a = i.map(e => {
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
                  return "# ".concat(t, "\n\n").concat(a.join("\n\n"));
                });
              return "\n# Basic Stats\n- Total channel visits (yr): "
                .concat(n, "\n- Total channel visits (month): ")
                .concat(i, "\n\n")
                .concat(o.join("\n\n"));
            })(Object.values(c), t),
        };
      }
      function x(e, t) {
        return Object.values(p.default.getGuilds()).some(n => {
          let [i] = m.default.hasConsented(P.Consents.PERSONALIZATION)
            ? (0, A.guessGuildModeWithRemoteData)(
                n,
                b.defaultThresholds,
                e,
                t,
                !1
              )
            : (0, A.guessGuildModeWithLocalData)(n, e);
          return i === b.Mode.UseGreyDot;
        });
      }
      function U() {
        let e = Object.values(p.default.getGuilds()),
          t = {};
        for (let a of e) {
          var n, i;
          let e =
              null !==
                (n = S.default.getAllSettings().userGuildSettings[a.id]) &&
              void 0 !== n
                ? n
                : {},
            s = null !== (i = e.flags) && void 0 !== i ? i : 0;
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
            (t[a.id] = { flags: s });
        }
        k(t),
          T.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
            auto_migrated: !0,
            num_unread_guids_after: e.filter(e => _.default.hasUnread(e.id))
              .length,
          });
      }
      function G(e) {
        let [t, n] = i.useState(!1),
          [a, s] = i.useState(!1),
          l = i.useCallback(
            async t => {
              if (a) throw Error("Already submitted notifications migration");
              n(!0);
              try {
                await j(t, e), s(!0);
              } finally {
                n(!1);
              }
            },
            [a, e]
          );
        return { submitting: t, submitted: a, saveSettings: l };
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
            var i, a;
            let e =
                null !==
                  (i =
                    S.default.getAllSettings().userGuildSettings[n.guildId]) &&
                void 0 !== i
                  ? i
                  : {},
              s = {};
            for (let t of n.actions)
              null === (a = t.apply) || void 0 === a || a.call(t, s, e);
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
              title: D.default.Messages.ERROR,
              body: D.default.Messages.NOTIF_MIGRATION_ERROR,
              onConfirm: t,
            });
        }
      }
      async function k(e) {
        await H(() => F()),
          await H(() =>
            d.default.setAccountFlag(
              O.AccountNotificationFlags.USE_NEW_NOTIFICATIONS,
              !0
            )
          );
        let t = await H(() => f.default.saveUserGuildSettingsBulk(e));
        r.default.dispatch({
          type: "USER_GUILD_SETTINGS_FULL_UPDATE",
          userGuildSettings: t,
        }),
          r.default.dispatch({ type: "RECOMPUTE_READ_STATES" });
      }
      async function H(e) {
        for (let e = 0; e < 3; e++)
          try {
            break;
          } catch (t) {
            await new Promise(t => setTimeout(t, 1e3 * (e + 1)));
          }
        return await e();
      }
      async function F() {
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
        o.Storage.set("turnedOffNewNotifications", !0),
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
        var t, n, i;
        if (null == e) return [];
        let a = s.keyBy(
            null !== (t = e.voice_joins) && void 0 !== t ? t : [],
            "channel_id"
          ),
          l = s.keyBy(
            null !== (n = e.message_sends) && void 0 !== n ? n : [],
            "channel_id"
          );
        return (null !== (i = e.channel_opens) && void 0 !== i ? i : [])
          .map(e => {
            var t, n, i, s, o, r, u, d, c, f, g;
            let m = null !== (t = a[e.channel_id]) && void 0 !== t ? t : {},
              h = null !== (n = l[e.channel_id]) && void 0 !== n ? n : {};
            return {
              channel_id: e.channel_id,
              num_year_opens: Number(
                null !== (i = e.year_opens) && void 0 !== i ? i : 0
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
      var i = n("917351"),
        a = n.n(i),
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
      function E(e, t, n, i, g) {
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
              let i = [
                  {
                    label: "Unmuting the guild and marking it as read",
                    apply: e => {
                      (e.muted = !1), (e.mute_config = null);
                    },
                    needsMarkedAsRead: !0,
                  },
                ],
                a = t.filter(
                  t =>
                    c.default.getChannelMessageNotifications(e.id, t.id) ===
                    _.UserNotificationSettings.ALL_MESSAGES
                );
              return (
                a.length > 0 &&
                  i.push({
                    label: "Setting ".concat(
                      a.length,
                      " to mentions-only since they were all-messages and we are unmuting the guild"
                    ),
                    debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                    apply: (e, t) => {
                      for (let n of a)
                        T(e, t, n.id, e => {
                          e.message_notifications =
                            _.UserNotificationSettings.ONLY_MENTIONS;
                        });
                    },
                  }),
                i
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
                [n, i] = a(e)
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
                i.length > 0 &&
                  t.push({
                    label: "Setting ".concat(
                      i.length,
                      " announcement channels to white-dot"
                    ),
                    debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                    apply: (e, t) => {
                      for (let n of i) v(e, t, n.id, !0);
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
                      for (let i of n)
                        v(e, t, i.id, !1),
                          T(e, t, i.id, e => {
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
                i = [];
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
                      i.push(e);
                }),
                n.length > 0 &&
                  t.push({
                    label: "Setting ".concat(
                      n.length,
                      " channels to white-dot since they were explicitly All Messages"
                    ),
                    debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                    apply: (e, t) => {
                      for (let i of n) v(e, t, i.id, !0);
                    },
                  }),
                i.length > 0 &&
                  t.push({
                    label: "Setting ".concat(
                      i.length,
                      " channels to grey-dot since they were explicitly Mentions Only"
                    ),
                    debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                    apply: (e, t) => {
                      for (let n of i) v(e, t, n.id, !1);
                    },
                  }),
                t
              );
            })(E)
          ),
          r.default.hasConsented(_.Consents.PERSONALIZATION)
            ? p.push(
                ...(function (e, t, n, i, s) {
                  let l =
                    c.default.isMuted(e.id) &&
                    !c.default.isTemporarilyMuted(e.id);
                  if (l) return [];
                  let o = new Set(t.map(e => e.id)),
                    r = i.filter(e => o.has(e.channel_id)),
                    u = a.keyBy(r, "channel_id"),
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
                    var t, n, i, a;
                    let s = null !== (t = u[e.id]) && void 0 !== t ? t : {};
                    Number(
                      null !== (n = s.num_year_opens) && void 0 !== n ? n : 0
                    ) > d ||
                    Number(
                      null !== (i = s.num_month_opens) && void 0 !== i ? i : 0
                    ) > f
                      ? g.push(e)
                      : Number(
                          null !== (a = s.num_three_month_opens) && void 0 !== a
                            ? a
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
                })(e, E, n, i, g)
              )
            : p.push(
                ...(function (e, t) {
                  let n =
                    c.default.isMuted(e.id) &&
                    !c.default.isTemporarilyMuted(e.id);
                  if (n) return [];
                  let i = [],
                    a = new Set(t.map(e => e.id)),
                    l = Date.now() - f.default.Millis.DAYS_30,
                    o = u.default
                      .getFrequentlyWithoutFetchingLatest()
                      .filter(
                        e => e instanceof s.ChannelRecordBase && a.has(e.id)
                      ),
                    r = o.filter(e => {
                      var t, n;
                      let i =
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
                      return 0 !== i.length && i[i.length - 1] >= l;
                    });
                  return (
                    r.length > 0 &&
                      i.push({
                        label: "Setting ".concat(
                          r.length,
                          " channels to white-dot since they are recent and frequently viewed"
                        ),
                        debug: r.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                          for (let n of r) v(e, t, n.id, !0);
                        },
                      }),
                    i
                  );
                })(e, E)
              ),
          p.filter(m.isNotNullish)
        );
      }
      function S(e, t, n) {
        var i, a;
        (e.flags = (0, g.setFlag)(
          null !== (a = null !== (i = e.flags) && void 0 !== i ? i : t.flags) &&
            void 0 !== a
            ? a
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
      function T(e, t, n, i) {
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
        i(u, d),
          !a.isEmpty(u) &&
            (null == e.channel_overrides && (e.channel_overrides = {}),
            (e.channel_overrides[n] = u));
      }
      function v(e, t, n, i) {
        T(e, t, n, (e, t) => {
          var n, a;
          (e.flags = (0, g.setFlag)(
            null !==
              (a = null !== (n = e.flags) && void 0 !== n ? n : t.flags) &&
              void 0 !== a
              ? a
              : 0,
            p.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES,
            i
          )),
            (e.flags = (0, g.setFlag)(
              e.flags,
              p.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS,
              !i
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
      var i = n("917351"),
        a = n.n(i),
        s = n("233069"),
        l = n("42203"),
        o = n("319781"),
        r = n("525065"),
        u = n("718517"),
        d = n("380353");
      function c(e, t, n, i, a) {
        var s, o, u, c;
        let g = l.default.getMutableGuildChannelsForGuild(e.id),
          m = i.filter(e => e.channel_id in g),
          h =
            null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s
              ? s
              : {},
          _ = r.default.getMemberCount(e.id),
          p = f("year", i, m, e => {
            var t;
            return Number(
              null !== (t = e.num_year_opens) && void 0 !== t ? t : 0
            );
          }),
          E = f("one month", i, m, e => {
            var t;
            return Number(
              null !== (t = e.num_month_opens) && void 0 !== t ? t : 0
            );
          }),
          S = f("three month", i, m, e => {
            var t;
            return Number(
              null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0
            );
          }),
          T = f("six month", i, m, e => {
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
          M = (null !== (c = p.guildOpens) && void 0 !== c ? c : 0) > 0;
        if (h.messages === d.PainLevel.High) {
          if (!a) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y];
          if (!C && M) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y];
        }
        return [d.Mode.KeepAsIs, C, "KeepAsIs" + y];
      }
      function f(e, t, n, i) {
        let s = t.reduce((e, t) => e + i(t), 0),
          l = n.reduce((e, t) => e + i(t), 0),
          o = a.sortBy(n, i).reverse()[0],
          r = null == o ? 0 : i(o),
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
        var n, i;
        let a =
            null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n
              ? n
              : {},
          l =
            null !== (i = r.default.getMemberCount(e.id)) && void 0 !== i
              ? i
              : 0,
          c = Date.now() - u.default.Millis.DAYS_30,
          f = o.default
            .getFrequentlyWithoutFetchingLatest()
            .filter(
              t => t instanceof s.ChannelRecordBase && t.guild_id === e.id
            ),
          g = f.filter(e => {
            var t, n;
            let i =
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
            return 0 !== i.length && i[i.length - 1] >= c;
          }),
          m = g.length >= 5,
          h = f.reduce((e, t) => {
            var n, i;
            return (
              e +
              (null !==
                (i =
                  null ===
                    (n =
                      o.default.frecencyWithoutFetchingLatest.usageHistory[
                        t.id
                      ]) || void 0 === n
                    ? void 0
                    : n.totalUses) && void 0 !== i
                ? i
                : 0)
            );
          }, 0),
          _ = "\n- **Local**:\n    - Guild Visits: "
            .concat(h, "\n    - Channels: ")
            .concat(f.length, "\n    - Recent Channels: ")
            .concat(g.length, "\n");
        return a.messages === d.PainLevel.High || l > 1e3
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
      var i = n("37983");
      n("884691");
      var a = n("872717"),
        s = n("95410"),
        l = n("77078"),
        o = n("689988"),
        r = n("350522"),
        u = n("282109"),
        d = n("640497"),
        c = n("699668"),
        f = n("49111");
      class g extends o.default {
        handlePostConnectionOpen() {
          if (
            !s.Storage.get("turnedOffNewNotifications") &&
            !!r.default.hasConsented(f.Consents.PERSONALIZATION) &&
            !!d.NotificationsExperiment.getCurrentConfig(
              { location: "NotificationMigrationManager" },
              { autoTrackExposure: !1 }
            ).enabled
          )
            !u.default.useNewNotifications &&
              (this.checkOldUserExperiment(), this.checkNewUserExperiment());
        }
        async checkOldUserExperiment() {
          let { logExposure: e, autoOpen: t } =
            d.UnreadsEntryPointExperiment.getCurrentConfig(
              { location: "NotificationMigrationManager" },
              { autoTrackExposure: !1 }
            );
          if (!e) return;
          let {
              body: { guild_noise: s, usage: o },
            } = await a.HTTP.get("/users/@me/notification-migration-data2"),
            r = (0, c.transformUsageData)(o),
            { default: u } = await n.el("923660").then(n.bind(n, "923660"));
          if (!(0, l.hasAnyModalOpen)())
            d.UnreadsEntryPointExperiment.trackExposure({
              location: "NotificationMigrationManager",
            }),
              t &&
                ((0, c.hasGoodCandidateServers)(s, r)
                  ? (0, l.openModal)(
                      e =>
                        (0, i.jsx)(u, {
                          ...e,
                          dismissable: !1,
                          guildPain: s,
                          myUsage: r,
                        }),
                      { onCloseRequest: () => {} }
                    )
                  : (0, c.autoMigrateToNewSystem)());
        }
        checkNewUserExperiment() {
          let { logExposure: e, enabled: t } =
            d.NewUserUnreadsEntryPointExperiment.getCurrentConfig(
              { location: "NotificationMigrationManager" },
              { autoTrackExposure: !1 }
            );
          e &&
            (d.NewUserUnreadsEntryPointExperiment.trackExposure({
              location: "NotificationMigrationManager",
            }),
            t && (0, c.autoMigrateToNewSystem)());
        }
        constructor(...e) {
          super(...e),
            (this.actions = {
              POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
            });
        }
      }
      async function m(e) {
        let {
            body: { guild_noise: t, usage: s },
          } = await a.HTTP.get("/users/@me/notification-migration-data2"),
          o = (0, c.transformUsageData)(s);
        (0, l.openModalLazy)(async () => {
          let { default: a } = await n.el("923660").then(n.bind(n, "923660"));
          return n =>
            (0, i.jsx)(a, { ...n, dismissable: e, guildPain: t, myUsage: o });
        });
      }
      var h = new g();
    },
    505093: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setUseSystemTheme: function () {
            return a;
          },
        });
      var i = n("913144");
      function a(e) {
        i.default.dispatch({
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
      var i = n("884691"),
        a = n("446674"),
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
        let n = (0, a.useStateFromStores)(
            [l.default],
            () => l.default.useReducedMotion
          ),
          r = (0, a.useStateFromStores)([o.default], () =>
            o.default.getScrollPosition()
          );
        (0, i.useEffect)(() => {
          let i = e.current;
          if (null == i || t !== r) return;
          let a = requestAnimationFrame(() => {
            i.scrollIntoView({ behavior: n ? "auto" : "smooth" }),
              s.default.clearScrollPosition(d[t]);
          });
          return () => cancelAnimationFrame(a);
        }, [e, t, r, n]);
      };
    },
  },
]);
//# sourceMappingURL=4574.d40fb1483ad69c97ad05.js.map
