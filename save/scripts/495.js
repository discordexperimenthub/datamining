(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["495"],
  {
    586139: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var l = (0, a("296892").default)({
        kind: "user",
        id: "2023-03_aa_user_segment_filter",
        label: "AA test to validate segmentation filter",
        defaultConfig: { isEnabled: !1 },
        treatments: [
          {
            id: 1,
            label: "AA test enabled. Noop on UI effect.",
            config: { isEnabled: !0 },
          },
        ],
      });
    },
    420610: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return y;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        o = a("446674"),
        s = a("54239"),
        u = a("79112"),
        i = a("901582"),
        r = a("800751"),
        d = a("84339"),
        c = a("812204"),
        f = a("716241"),
        S = a("685665"),
        g = a("260518"),
        p = a("586139"),
        E = a("167209"),
        _ = a("879364"),
        h = a("26092"),
        m = a("161778"),
        b = a("373798"),
        k = a("49111"),
        T = a("782340");
      let v = n.forwardRef(function () {
        p.default.trackExposure({ location: "cd25e4_1" }),
          g.default.useExperiment(
            { location: "user_setting_auto" },
            { autoTrackExposure: !1 }
          ),
          g.default.trackExposure({ location: "user_setting_manual" });
        let e = (0, o.useStateFromStores)([m.default], () => m.default.theme),
          t = (0, o.useStateFromStores)([m.default], () =>
            m.default.darkSidebar ? k.ThemeTypes.DARK : void 0
          ),
          {
            section: a,
            subsection: v,
            analyticsLocation: y,
            analyticsLocations: A,
          } = (0, o.useStateFromStoresObject)([h.default], () => {
            let e = h.default.getSection(),
              t = h.default.getSubsection(),
              { analyticsLocation: a, analyticsLocations: l } =
                h.default.getProps();
            return {
              section: e,
              subsection: t,
              analyticsLocation: a,
              analyticsLocations: l,
            };
          }),
          P = (0, d.default)(a),
          x = (0, d.default)(v),
          { analyticsLocations: F } = (0, S.default)(c.default.USER_SETTINGS);
        n.useEffect(() => {
          let e = null != a && (a !== P || v !== x);
          e &&
            !(function (e) {
              let {
                destinationPane: t,
                originPane: a = null,
                source: l = null,
                subsection: n = null,
                locationStack: o = null,
              } = e;
              f.default.trackWithMetadata(
                k.AnalyticEvents.SETTINGS_PANE_VIEWED,
                {
                  settings_type: "user",
                  origin_pane: a,
                  destination_pane: t,
                  location_stack: o,
                  source: l,
                  subsection: n,
                }
              );
            })({
              destinationPane: a,
              originPane: null != P ? P : null,
              source: y,
              subsection: v,
              locationStack: A,
            });
        }, [a, P, v, x, y, A]);
        let I = (0, b.default)(),
          j = (0, E.useIsEligibleForPomelo)(),
          w = (0, _.useShouldShowSettingBadgeForQuests)(),
          L = n.useCallback(e => {
            u.default.setSection(e);
          }, []);
        return (0, l.jsx)(S.AnalyticsLocationProvider, {
          value: F,
          children: (0, l.jsx)(i.default, {
            root: !0,
            page: k.AnalyticsPages.USER_SETTINGS,
            children: (0, l.jsx)(r.default, {
              theme: e,
              title: T.default.Messages.USER_SETTINGS,
              sidebarTheme: t,
              section: a,
              onSetSection: L,
              onClose: s.popLayer,
              sections: I,
              isEligibleForPomelo: j,
              shouldShowSettingBadgeForQuests: w,
            }),
          }),
        });
      });
      var y = n.forwardRef(function () {
        let e = (0, o.useStateFromStores)(
            [h.default],
            () => h.default.getProps().analyticsLocations
          ),
          { analyticsLocations: t } = (0, S.default)(e);
        return (0, l.jsx)(S.AnalyticsLocationProvider, {
          value: t,
          children: (0, l.jsx)(v, {}),
        });
      });
    },
  },
]);
//# sourceMappingURL=b0cfabb1d48e37ae18fa.js.map
