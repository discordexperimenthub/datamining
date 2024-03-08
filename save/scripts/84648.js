(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84648"],
  {
    804090: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("699914");
      n.es(l, t);
    },
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("35466");
      n.es(l, t);
    },
    176032: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        r = n("272030"),
        i = n("957255"),
        o = n("530346"),
        c = n("662255"),
        u = n("306160"),
        d = n("49111"),
        f = n("782340"),
        h = n("26900"),
        v = function (e) {
          var t;
          let { guild: v, user: p, onSelect: C } = e,
            M =
              null !== (t = null == v ? void 0 : v.id) && void 0 !== t
                ? t
                : d.EMPTY_STRING_SNOWFLAKE_ID,
            I = (0, s.useStateFromStores)(
              [i.default],
              () =>
                null != v &&
                i.default.canManageUser(d.Permissions.BAN_MEMBERS, p, v),
              [v, p]
            );
          return (0, l.jsx)(a.Menu, {
            navId: "member-application-context-menu",
            className: h.contextMenu,
            onClose: r.closeContextMenu,
            "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
            onSelect: C,
            children: (0, l.jsxs)(a.MenuGroup, {
              children: [
                I &&
                  (0, l.jsx)(
                    a.MenuItem,
                    {
                      id: "ban",
                      label:
                        f.default.Messages
                          .GUILD_SETTINGS_MEMBER_VERIFICATION_BAN_USER,
                      icon: o.default,
                      color: "danger",
                      action: () =>
                        (0, a.openModalLazy)(async () => {
                          let { default: e } = await n
                            .el("743506")
                            .then(n.bind(n, "743506"));
                          return t =>
                            (0, l.jsx)(e, { ...t, guildId: M, user: p });
                        }),
                    },
                    "ban"
                  ),
                (0, l.jsx)(
                  a.MenuItem,
                  {
                    id: "copyUserId",
                    label: "Copy User ID",
                    icon: c.default,
                    action: () => (0, u.copy)(p.id),
                  },
                  "copyUserId"
                ),
              ],
            }),
          });
        };
    },
    530346: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("469563"),
        a = n("804090"),
        r = n("75196"),
        i = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              ...a
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, r.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.75 0.5L15.5 6.5V8L11.751 11.751H10.25L3.5 5.75V4.25L7.25 0.5H8.75ZM12.2803 1.03033C12.5732 0.737437 13.0458 0.735124 13.346 1.0353L14.3967 2.08602C14.6923 2.38166 14.6966 2.85672 14.4017 3.15165C14.1088 3.44454 13.6362 3.44686 13.336 3.14668L12.2853 2.09596C11.9897 1.80032 11.9854 1.32527 12.2803 1.03033V1.03033ZM5.27297 8.75L6.86396 10.341L2.09099 15.114L0.5 13.523L5.27297 8.75Z",
                fill: s,
              }),
            });
          },
          a.HammerIcon,
          void 0,
          { size: 24 }
        );
    },
    662255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("469563"),
        a = n("35647"),
        r = n("75196"),
        i = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: a,
              ...i
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: a,
                fill: s,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          a.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    699914: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HammerIcon: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("669491"),
        a = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M1.23 21.13a1 1 0 0 1 0-1.41l7.48-7.47c.2-.2.51-.2.7 0l2.13 2.12c.2.2.2.5 0 .7l-7.48 7.48a1 1 0 0 1-1.41 0l-1.42-1.42ZM7.76 7.76l8.48 8.49a2 2 0 0 0 2.83 0l3.54-3.54a2 2 0 0 0 0-2.83l-2.94-2.94.65-.66a1 1 0 0 0 0-1.4l-1.41-1.42a1 1 0 0 0-1.41 0l-.66.65-2.72-2.71a2 2 0 0 0-2.83 0L7.76 4.93a2 2 0 0 0 0 2.83Z",
            className: i,
          }),
        });
      };
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("669491"),
        a = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: i,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: i,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=b7ea770d61e89690ac65.js.map
