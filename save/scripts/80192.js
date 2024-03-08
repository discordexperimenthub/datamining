(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80192"],
  {
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("685665");
      function r(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: r } = (0, l.default)(t);
          return (0, s.jsx)(r, { children: (0, s.jsx)(e, { ...n }) });
        };
      }
    },
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("35466");
      n.es(s, t);
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("627445"),
        r = n.n(l),
        u = n("77078"),
        a = n("845579"),
        i = n("662255"),
        o = n("306160");
      function c(e) {
        let { id: t, label: n, onSuccess: l, shiftId: c, showIconFirst: d } = e,
          f = a.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !o.SUPPORTS_COPY || null == t) return null;
        let p = "devmode-copy-id-".concat(t);
        return (0, s.jsx)(
          u.MenuItem,
          {
            id: p,
            label: n,
            action: function (e) {
              let n = null != c && e.shiftKey ? c : t;
              r(null != n, "cannot copy null text"),
                (0, o.copy)(n),
                null == l || l();
            },
            icon: i.default,
            showIconFirst: d,
          },
          p
        );
      }
    },
    366416: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsIarUserReportingEnabled: function () {
            return r;
          },
        });
      var s = n("862205");
      let l = (0, s.createExperiment)({
        kind: "user",
        id: "2023-09_iar_user_reporting",
        label: "Safety Experience IAR User Reporting",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        return l.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    487956: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("424973");
      var s = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("272030"),
        u = n("158534"),
        a = n("812204"),
        i = n("861370"),
        o = n("366416"),
        c = n("49111"),
        d = n("782340"),
        f = (0, u.default)(
          function (e) {
            let {
                user: t,
                relationshipType: n,
                onRemoveFriend: u,
                onBlock: a,
                onReport: f,
                onMessage: p,
                onSelect: h,
              } = e,
              M = t.isNonUserBot(),
              E = [],
              C = (0, o.useIsIarUserReportingEnabled)(
                "User Profile Actions Menu"
              );
            if (!M)
              switch (n) {
                case c.RelationshipTypes.BLOCKED:
                  E.push(
                    (0, s.jsx)(l.MenuItem, {
                      id: "user-unblock",
                      label: d.default.Messages.UNBLOCK,
                      action: u,
                    })
                  );
                  break;
                case c.RelationshipTypes.FRIEND:
                  E.push(
                    (0, s.jsx)(l.MenuItem, {
                      id: "user-remove",
                      label: d.default.Messages.REMOVE_FRIEND,
                      action: u,
                      color: "danger",
                    })
                  ),
                    E.push(
                      (0, s.jsx)(l.MenuItem, {
                        id: "user-block",
                        label: d.default.Messages.BLOCK,
                        action: a,
                        color: "danger",
                      })
                    ),
                    C &&
                      E.push(
                        (0, s.jsx)(l.MenuItem, {
                          id: "user-report",
                          label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
                          action: f,
                          color: "danger",
                        })
                      );
                  break;
                case c.RelationshipTypes.NONE:
                case c.RelationshipTypes.PENDING_INCOMING:
                default:
                  E.push(
                    (0, s.jsx)(l.MenuItem, {
                      id: "user-block",
                      label: d.default.Messages.BLOCK,
                      action: a,
                      color: "danger",
                    })
                  ),
                    C &&
                      E.push(
                        (0, s.jsx)(l.MenuItem, {
                          id: "user-report",
                          label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
                          action: f,
                          color: "danger",
                        })
                      );
              }
            !M &&
              n !== c.RelationshipTypes.BLOCKED &&
              E.push(
                (0, s.jsx)(l.MenuItem, {
                  id: "user-message",
                  label: d.default.Messages.USER_POPOUT_MESSAGE,
                  action: p,
                })
              );
            let I = (0, i.default)({
              id: t.id,
              label: d.default.Messages.COPY_ID_USER,
              onSuccess: r.closeContextMenu,
            });
            return (0, s.jsxs)(l.Menu, {
              navId: "user-profile-actions",
              "aria-label": d.default.Messages.USER_ACTIONS_MENU_LABEL,
              onClose: r.closeContextMenu,
              onSelect: h,
              children: [
                (0, s.jsx)(l.MenuGroup, { children: E }),
                null != I ? (0, s.jsx)(l.MenuGroup, { children: I }) : null,
              ],
            });
          },
          [a.default.CONTEXT_MENU, a.default.USER_PROFILE_ACTIONS_MENU]
        );
    },
    662255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("469563"),
        r = n("35647"),
        u = n("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: r,
              ...a
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, u.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: r,
                fill: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          r.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return u;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("669491"),
        r = n("82169");
      let u = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: u = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...i
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, r.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: a,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: a,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=ab8a7ebdfd8180e45a3d.js.map
