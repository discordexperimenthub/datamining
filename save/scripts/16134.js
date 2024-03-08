(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16134"],
  {
    334487: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return n;
          },
        });
      var n = (0, i("862205").createExperiment)({
        kind: "user",
        id: "2021-10_runtime_accessibility_system",
        label: "Runtime Accessibility System",
        defaultConfig: { enabled: !1, reporting: !1 },
        treatments: [
          {
            id: 1,
            label: "Enabled but silent",
            config: { enabled: !0, reporting: !1 },
          },
          {
            id: 2,
            label: "Enabled and reporting",
            config: { enabled: !0, reporting: !0 },
          },
        ],
      });
    },
    424797: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return d;
          },
        }),
        i("222007");
      var n = i("37983"),
        o = i("884691"),
        l = i("77078"),
        s = i("20606"),
        r = i("370492"),
        a = i("334487"),
        u = i("696316"),
        c = i("759388");
      function d() {
        let [e, t] = o.useState(!1),
          i = (0, c.useUniqueAccessibilityViolations)(),
          { reporting: d } = a.default.useExperiment(
            { location: "be7a1c_1" },
            { autoTrackExposure: !1 }
          );
        return (o.useEffect(() => {
          if (d && e && null != i)
            return (
              i.forEach(e => {
                e.elements.forEach(e => {
                  e.setAttribute(u.VIOLATION_ATTRIBUTE_NAME, "");
                });
              }),
              () => {
                i.forEach(e => {
                  e.elements.forEach(e => {
                    e.removeAttribute(u.VIOLATION_ATTRIBUTE_NAME);
                  });
                });
              }
            );
        }, [i, d, e]),
        d && null != i && 0 !== i.length)
          ? (0, n.jsxs)("div", {
              style: {
                backgroundColor: s.default.INFO_DANGER_BACKGROUND,
                color: s.default.INFO_DANGER_TEXT,
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
              },
              children: [
                (0, n.jsx)(l.Text, {
                  variant: "text-sm/semibold",
                  color: "info-danger-text",
                  children:
                    "Accessibility compliance issue(s) detected, check in-app DevTools",
                }),
                (0, n.jsxs)("div", {
                  style: {
                    display: "grid",
                    gridAutoFlow: "column",
                    gap: 4,
                    marginLeft: "auto",
                  },
                  children: [
                    (0, n.jsx)(l.Button, {
                      size: l.Button.Sizes.TINY,
                      color: l.Button.Colors.RED,
                      style: { marginLeft: "auto" },
                      onClick: r.toggleDisplayDevTools,
                      children: "Open DevTools",
                    }),
                    (0, n.jsxs)(l.Button, {
                      size: l.Button.Sizes.TINY,
                      color: l.Button.Colors.RED,
                      look: l.Button.Looks.INVERTED,
                      style: { marginLeft: "auto" },
                      onClick: () => t(!e),
                      children: [e ? "Hide" : "Show", " Overlays"],
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=2a697063d658b9fa4e70.js.map
