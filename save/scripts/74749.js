(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74749"],
  {
    35647: function (e, n, t) {
      "use strict";
      t.r(n);
      var l = t("35466");
      t.es(l, n);
    },
    454e3: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return s;
          },
        });
      var l = t("37983");
      t("884691");
      var u = t("77078"),
        i = t("272030"),
        o = t("861370"),
        c = t("818059"),
        a = t("782340");
      function s(e) {
        let {
            channel: n,
            channelId: t,
            originalLink: s,
            messageId: r,
            onSelect: d,
          } = e,
          f = (0, c.default)(n, s, r),
          C = (0, o.default)({
            id: t,
            label: a.default.Messages.COPY_ID_CHANNEL,
          });
        return (0, l.jsxs)(u.Menu, {
          navId: "channel-mention-context",
          onClose: i.closeContextMenu,
          onSelect: d,
          "aria-label": a.default.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,
          children: [
            (0, l.jsx)(u.MenuGroup, { children: f }, "channel-mention-actions"),
            (0, l.jsx)(u.MenuGroup, { children: C }, "developer-actions"),
          ],
        });
      }
    },
    458574: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        });
      var l = t("37983");
      t("884691");
      var u = t("281071"),
        i = t("65597"),
        o = t("77078"),
        c = t("867965"),
        a = t("42203"),
        s = t("404008"),
        r = t("49111"),
        d = t("782340");
      function f(e, n, t) {
        let f = (0, i.default)([a.default], () =>
          a.default.getChannel(e.parent_id)
        );
        return (0, l.jsx)(o.MenuItem, {
          id: "channel-copy-link",
          label: d.default.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, c.trackForumPostLinkCopied)({
                postId: e.id,
                location: { section: r.AnalyticsSections.CONTEXT_MENU },
              }),
              (0, u.copy)((0, s.getChannelLinkToCopy)(e, f, n, t));
          },
        });
      }
    },
    818059: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return a;
          },
        });
      var l = t("37983");
      t("884691");
      var u = t("281071"),
        i = t("77078"),
        o = t("458574"),
        c = t("782340");
      function a(e, n, t) {
        return null != e
          ? (0, o.default)(e, t, n)
          : (0, l.jsx)(i.MenuItem, {
              id: "channel-copy-link",
              label: c.default.Messages.COPY_LINK,
              action: () => {
                (0, u.copy)(null != n ? n : "");
              },
            });
      }
    },
    861370: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return r;
          },
        });
      var l = t("37983");
      t("884691");
      var u = t("627445"),
        i = t.n(u),
        o = t("77078"),
        c = t("845579"),
        a = t("662255"),
        s = t("306160");
      function r(e) {
        let { id: n, label: t, onSuccess: u, shiftId: r, showIconFirst: d } = e,
          f = c.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !s.SUPPORTS_COPY || null == n) return null;
        let C = "devmode-copy-id-".concat(n);
        return (0, l.jsx)(
          o.MenuItem,
          {
            id: C,
            label: t,
            action: function (e) {
              let t = null != r && e.shiftKey ? r : n;
              i(null != t, "cannot copy null text"),
                (0, s.copy)(t),
                null == u || u();
            },
            icon: a.default,
            showIconFirst: d,
          },
          C
        );
      }
    },
    662255: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return c;
          },
        });
      var l = t("37983");
      t("884691");
      var u = t("469563"),
        i = t("35647"),
        o = t("75196"),
        c = (0, u.replaceIcon)(
          function (e) {
            let {
              width: n = 24,
              height: t = 24,
              color: u = "currentColor",
              foreground: i,
              ...c
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, o.default)(c),
              width: n,
              height: t,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: i,
                fill: u,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          i.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    35466: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          IdIcon: function () {
            return o;
          },
        });
      var l = t("37983");
      t("884691");
      var u = t("669491"),
        i = t("82169");
      let o = e => {
        let {
          width: n = 24,
          height: t = 24,
          color: o = u.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...a
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=8d4ea85114c5aa8819c2.js.map
