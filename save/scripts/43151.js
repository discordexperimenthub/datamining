(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43151"],
  {
    35647: function (e, n, t) {
      "use strict";
      t.r(n);
      var l = t("35466");
      t.es(l, n);
    },
    861370: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return c;
          },
        });
      var l = t("37983");
      t("884691");
      var i = t("627445"),
        r = t.n(i),
        a = t("77078"),
        s = t("845579"),
        u = t("662255"),
        o = t("306160");
      function c(e) {
        let { id: n, label: t, onSuccess: i, shiftId: c, showIconFirst: d } = e,
          f = s.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !o.SUPPORTS_COPY || null == n) return null;
        let h = "devmode-copy-id-".concat(n);
        return (0, l.jsx)(
          a.MenuItem,
          {
            id: h,
            label: t,
            action: function (e) {
              let t = null != c && e.shiftKey ? c : n;
              r(null != t, "cannot copy null text"),
                (0, o.copy)(t),
                null == i || i();
            },
            icon: u.default,
            showIconFirst: d,
          },
          h
        );
      }
    },
    348866: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return o;
          },
        });
      var l = t("37983");
      t("884691");
      var i = t("77078"),
        r = t("272030"),
        a = t("861370"),
        s = t("970755"),
        u = t("782340");
      function o(e) {
        let { channel: n, integration: t, onSelect: o } = e,
          c = (0, a.default)({
            id: n.id,
            label: u.default.Messages.COPY_ID_APPLICATION,
          });
        return (0, l.jsxs)(i.Menu, {
          "aria-label": u.default.Messages.MANAGE_INTEGRATION,
          navId: "manage-integration",
          onClose: r.closeContextMenu,
          onSelect: o,
          children: [
            (0, l.jsx)(i.MenuGroup, {
              children: (0, l.jsx)(i.MenuItem, {
                id: "remove-integration",
                label:
                  u.default.Messages
                    .BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
                action: () => {
                  (0, s.deletePrivateChannelIntegration)(
                    n.id,
                    t.application.id
                  ),
                    null != o && o();
                },
                color: "danger",
              }),
            }),
            (0, l.jsx)(i.MenuGroup, { children: c }),
          ],
        });
      }
    },
    662255: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return s;
          },
        });
      var l = t("37983");
      t("884691");
      var i = t("469563"),
        r = t("35647"),
        a = t("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: n = 24,
              height: t = 24,
              color: i = "currentColor",
              foreground: r,
              ...s
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, a.default)(s),
              width: n,
              height: t,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: r,
                fill: i,
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
    35466: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          IdIcon: function () {
            return a;
          },
        });
      var l = t("37983");
      t("884691");
      var i = t("669491"),
        r = t("82169");
      let a = e => {
        let {
          width: n = 24,
          height: t = 24,
          color: a = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: s,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: s,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=0fafcdb881e3981cb7c8.js.map
