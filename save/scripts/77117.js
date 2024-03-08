(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77117"],
  {
    704426: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("733527");
      n.es(l, t);
    },
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("35466");
      n.es(l, t);
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("627445"),
        u = n.n(r),
        o = n("77078"),
        i = n("845579"),
        c = n("662255"),
        s = n("306160");
      function a(e) {
        let { id: t, label: n, onSuccess: r, shiftId: a, showIconFirst: d } = e,
          f = i.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !s.SUPPORTS_COPY || null == t) return null;
        let h = "devmode-copy-id-".concat(t);
        return (0, l.jsx)(
          o.MenuItem,
          {
            id: h,
            label: n,
            action: function (e) {
              let n = null != a && e.shiftKey ? a : t;
              u(null != n, "cannot copy null text"),
                (0, s.copy)(n),
                null == r || r();
            },
            icon: c.default,
            showIconFirst: d,
          },
          h
        );
      }
    },
    893455: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("446674"),
        u = n("77078"),
        o = n("592407"),
        i = n("479756"),
        c = n("507950"),
        s = n("957255"),
        a = n("538137"),
        d = n("49111"),
        f = n("782340");
      function h(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : d.GuildSettingsSections.ROLES,
          h = (0, r.useStateFromStores)([s.default], () =>
            s.default.canImpersonateRole(e, t)
          );
        return h
          ? (0, l.jsx)(
              u.MenuItem,
              {
                id: "view-as-role",
                label: f.default.Messages.VIEW_AS_ROLE,
                icon: a.default,
                action: () => {
                  o.default.close(),
                    (0, i.startImpersonating)(e.id, {
                      type: c.ImpersonateType.ROLES,
                      roles: { [t.id]: t },
                      returnToSection: n,
                    });
                },
              },
              "view-as-role"
            )
          : null;
      }
    },
    178521: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("424973");
      var l = n("37983");
      n("884691");
      var r = n("77078"),
        u = n("272030"),
        o = n("861370"),
        i = n("893455"),
        c = n("49111"),
        s = n("782340");
      function a(e) {
        let { role: t, guild: n, onSelect: a } = e,
          d = [],
          f = (0, i.default)(n, t, c.GuildSettingsSections.INTEGRATIONS);
        null != f && d.push(f);
        let h = (0, o.default)({
          id: t.id,
          label: s.default.Messages.COPY_ID_ROLE,
        });
        return (null != h && d.push(h), 0 === d.length)
          ? null
          : (0, l.jsx)(r.Menu, {
              navId: "guild-integrations-permission-role-context",
              "aria-label": s.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
              onClose: u.closeContextMenu,
              onSelect: a,
              children: d,
            });
      }
    },
    246053: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("70102");
      var l,
        r,
        u = n("37983");
      n("884691");
      var o = n("414456"),
        i = n.n(o),
        c = n("75196"),
        s = n("774889");
      ((r = l || (l = {})).LEFT = "LEFT"),
        (r.RIGHT = "RIGHT"),
        (r.UP = "UP"),
        (r.DOWN = "DOWN"),
        (r.UP_LEFT = "UP_LEFT"),
        (r.DOWN_RIGHT = "DOWN_RIGHT");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = "currentColor",
          direction: r,
          foreground: o,
          className: a,
          title: d,
          ...f
        } = e;
        return (0, u.jsxs)("svg", {
          ...(0, c.default)(f),
          width: t,
          height: n,
          className: i(
            a,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return s.left;
                case "RIGHT":
                  return s.right;
                case "UP":
                  return null;
                case "DOWN":
                  return s.down;
                case "UP_LEFT":
                  return s.upLeft;
                case "DOWN_RIGHT":
                  return s.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(r)
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, u.jsx)("title", { children: d }) : null,
            (0, u.jsx)("polygon", {
              className: o,
              fill: l,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      a.Directions = l;
      var d = a;
    },
    538137: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("469563"),
        u = n("704426"),
        o = n("246053"),
        i = (0, r.replaceIcon)(function (e) {
          return (0, l.jsx)(o.default, {
            ...e,
            direction: o.default.Directions.RIGHT,
          });
        }, u.ArrowSmallRightIcon);
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
      var r = n("469563"),
        u = n("35647"),
        o = n("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: u,
              ...i
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, o.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: u,
                fill: r,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          u.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return o;
          },
          copy: function () {
            return i;
          },
        }),
        n("70102");
      var l = n("281071"),
        r = n("773336"),
        u = n("50885");
      let o = (() => {
        if (r.isPlatformEmbedded) return null != u.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function i(e) {
        return (
          !!o && (r.isPlatformEmbedded ? (u.default.copy(e), !0) : l.copy(e))
        );
      }
    },
    733527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ArrowSmallRightIcon: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("669491"),
        u = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, u.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
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
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("669491"),
        u = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, u.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: i,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: i,
            }),
          ],
        });
      };
    },
    281071: function (e, t, n) {
      "use strict";
      function l(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          l = window.getSelection(),
          r = document.createElement("textarea");
        (r.value = e),
          (r.contentEditable = "true"),
          (r.style.visibility = "none"),
          t.appendChild(r),
          n.selectNodeContents(r),
          null == l || l.removeAllRanges(),
          null == l || l.addRange(n),
          r.focus(),
          r.setSelectionRange(0, e.length);
        let u = document.execCommand("copy");
        return t.removeChild(r), u;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return l;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=8f477611adf5d44c723a.js.map
