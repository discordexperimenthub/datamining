(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78628"],
  {
    691096: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("46575");
      l.es(s, t);
    },
    292915: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("353982");
      l.es(s, t);
    },
    47693: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("925119");
      l.es(s, t);
    },
    87102: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return x;
          },
        });
      var s = l("37983");
      l("884691");
      var a = l("446674"),
        n = l("77078"),
        i = l("272030"),
        r = l("817963"),
        c = l("305961"),
        o = l("957255"),
        u = l("677099"),
        d = l("697218"),
        f = l("195812"),
        h = l("754576"),
        v = l("228220"),
        p = l("782340");
      function x(e) {
        let { onExportToFile: t, onExportToSoundboard: l, onDelete: x } = e,
          g = (0, a.useStateFromStores)(
            [u.default, o.default, d.default, c.default],
            () =>
              u.default.getFlattenedGuildIds().some(e => {
                let t = c.default.getGuild(e);
                if (null == t) return !1;
                let l = (0, r.getManageResourcePermissions)(
                  t,
                  o.default,
                  d.default
                );
                return l.canCreateExpressions;
              })
          );
        return (0, s.jsxs)(n.Menu, {
          navId: "clips-more-options",
          "aria-label": p.default.Messages.MORE_OPTIONS,
          onClose: i.closeContextMenu,
          onSelect: i.closeContextMenu,
          children: [
            g
              ? (0, s.jsx)(n.MenuItem, {
                  icon: h.default,
                  id: "clips-export-soundboard",
                  label: p.default.Messages.CLIPS_EXPORT_TO_SOUNDBOARD,
                  action: l,
                })
              : null,
            (0, s.jsx)(n.MenuItem, {
              icon: f.default,
              id: "clips-export-file",
              label: p.default.Messages.CLIPS_EXPORT_TO_FILE,
              action: t,
            }),
            (0, s.jsx)(n.MenuItem, {
              icon: v.default,
              id: "clips-delete",
              label: p.default.Messages.DELETE,
              color: "danger",
              action: x,
            }),
          ],
        });
      }
    },
    195812: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("37983");
      l("884691");
      var a = l("469563"),
        n = l("691096"),
        i = l("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              foreground: n,
              ...r
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: n,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z",
              }),
            });
          },
          n.DownloadIcon,
          void 0,
          { size: 24 }
        );
    },
    754576: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("37983");
      l("884691");
      var a = l("469563"),
        n = l("292915"),
        i = l("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              ...n
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, i.default)(n),
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: [
                (0, s.jsxs)("g", {
                  clipPath: "url(#clip0_414_20322)",
                  children: [
                    (0, s.jsx)("path", {
                      d: "M2 6.00299V18.003C2 19.107 2.895 20.003 4 20.003H5V4.00299H4C2.895 4.00299 2 4.89799 2 6.00299Z",
                      fill: a,
                    }),
                    (0, s.jsx)("path", {
                      d: "M20 4.00299H7V20.003H20C21.104 20.003 22 19.107 22 18.003V6.00299C22 4.89799 21.104 4.00299 20 4.00299ZM19 14.003C19 15.107 18.104 16.003 17 16.003C15.896 16.003 15 15.107 15 14.003C15 12.899 15.896 12.003 17 12.003V9.38999L13 10.724C13 10.724 13 14.984 13 15.003C13 16.107 12.104 17.003 11 17.003C9.896 17.003 9 16.107 9 15.003C9 13.899 9.896 13.003 11 13.003V10.003C11 9.57199 11.275 9.19099 11.684 9.05399L17.684 7.05399C17.989 6.95199 18.323 7.00299 18.585 7.19199C18.846 7.37899 19 7.68199 19 8.00299C19 8.00299 19 13.983 19 14.003Z",
                      fill: a,
                    }),
                  ],
                }),
                (0, s.jsx)("defs", {
                  children: (0, s.jsx)("clipPath", {
                    id: "clip0_414_20322",
                    children: (0, s.jsx)("rect", {
                      width: "24",
                      height: "24",
                      fill: "white",
                    }),
                  }),
                }),
              ],
            });
          },
          n.SoundboardIcon,
          void 0,
          { size: 24 }
        );
    },
    228220: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("37983");
      l("884691");
      var a = l("469563"),
        n = l("47693"),
        i = l("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              foreground: n,
              ...r
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: [
                (0, s.jsx)("path", {
                  fill: a,
                  className: n,
                  d: "M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z",
                }),
                (0, s.jsx)("path", {
                  fill: a,
                  className: n,
                  d: "M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z",
                }),
              ],
            });
          },
          n.TrashIcon,
          void 0,
          { size: 24 }
        );
    },
    46575: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          DownloadIcon: function () {
            return i;
          },
        });
      var s = l("37983");
      l("884691");
      var a = l("669491"),
        n = l("82169");
      let i = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...c
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: r,
          }),
        });
      };
    },
    353982: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          SoundboardIcon: function () {
            return i;
          },
        });
      var s = l("37983");
      l("884691");
      var a = l("669491"),
        n = l("82169");
      let i = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...c
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M14.24 1.03a1 1 0 0 1 .73 1.21l-1 4a1 1 0 1 1-1.94-.48l1-4a1 1 0 0 1 1.21-.73ZM20.7 4.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 0 0 1.4 1.4l4-4Z",
              className: r,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M15.14 20.14c1.78-1.78.7-5.75-2.42-8.86-3.11-3.12-7.08-4.2-8.86-2.42A3.13 3.13 0 0 0 3 11V11l-1.16 8.92a2 2 0 0 0 2.24 2.24L13 21c.86-.04 1.6-.32 2.14-.86Zm-1.3-3.4a9.61 9.61 0 0 0-2.53-4.05 9.61 9.61 0 0 0-4.05-2.53c-1.27-.35-1.82-.05-1.99.11-.16.17-.46.72-.11 2a9.61 9.61 0 0 0 2.53 4.04 9.61 9.61 0 0 0 4.05 2.53c1.27.35 1.82.05 1.99-.11.16-.17.46-.72.11-2Z",
              clipRule: "evenodd",
              className: r,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M7.05 3.32a1 1 0 0 1 1.9-.64l1 3a1 1 0 0 1-1.9.64l-1-3ZM22.97 9.76a1 1 0 0 0-1.21-.73l-4 1a1 1 0 1 0 .48 1.94l4-1a1 1 0 0 0 .73-1.21ZM20.68 16.95a1 1 0 0 0 .64-1.9l-3-1a1 1 0 0 0-.64 1.9l3 1Z",
              className: r,
            }),
          ],
        });
      };
    },
    925119: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          TrashIcon: function () {
            return i;
          },
        });
      var s = l("37983");
      l("884691");
      var a = l("669491"),
        n = l("82169");
      let i = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...c
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z",
              className: r,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z",
              clipRule: "evenodd",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=2f32dde6ae68a078e9c2.js.map
