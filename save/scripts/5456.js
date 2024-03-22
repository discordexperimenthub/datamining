(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5456"],
  {
    88885: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("605244");
      n.es(l, t);
    },
    437150: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGuildFeedHideItem: function () {
            return C;
          },
          useGuildFeedRemoveItem: function () {
            return p;
          },
          targetToContext: function () {
            return x;
          },
          default: function () {
            return S;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("118810"),
        o = n("65597"),
        s = n("77078"),
        a = n("272030"),
        u = n("861370"),
        i = n("126423"),
        d = n("518155"),
        c = n("447651"),
        f = n("26051"),
        E = n("271938"),
        M = n("957255"),
        h = n("867544"),
        m = n("399699"),
        _ = n("713810"),
        I = n("49111"),
        g = n("782340");
      function C(e, t) {
        return (0, l.jsx)(s.MenuItem, {
          id: "hide-feed-message",
          label: g.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
          action: n => (
            n.stopPropagation(), (0, _.hideItemFromGuildFeed)(e, t)
          ),
          icon: h.default,
          iconProps: { foregroundColor: "currentColor" },
        });
      }
      function p(e, t, n) {
        let r = (0, o.useStateFromStores)([E.default], () => E.default.getId()),
          a = (0, o.useStateFromStores)(
            [M.default],
            () => M.default.can(I.Permissions.MANAGE_MESSAGES, n),
            [n]
          ),
          u = t.author.id === r || a;
        return u
          ? (0, l.jsx)(s.MenuItem, {
              id: "remove-feed-message",
              label: g.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
              action: t => {
                t.stopPropagation();
                let n = !0;
                return (
                  t.shiftKey && (n = !1),
                  (function (e, t) {
                    if (!t) {
                      (0, _.removeItemFromGuildFeed)(e);
                      return;
                    }
                    (0, s.openModal)(t =>
                      (0, l.jsx)(s.ConfirmModal, {
                        header:
                          g.default.Messages
                            .GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
                        confirmText:
                          g.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
                        cancelText: g.default.Messages.CANCEL,
                        onConfirm: () => (0, _.removeItemFromGuildFeed)(e),
                        ...t,
                        children: (0, l.jsx)(s.Text, {
                          variant: "text-md/normal",
                          children:
                            g.default.Messages
                              .GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT,
                        }),
                      })
                    );
                  })(e, n)
                );
              },
              icon: m.default,
              iconProps: { foregroundColor: "currentColor" },
            })
          : null;
      }
      function x(e) {
        let t,
          n,
          l,
          o = e;
        for (; (0, r.isElement)(o, Node); )
          (0, r.isElement)(o, HTMLImageElement) && null != o.src && (n = o.src),
            (0, r.isElement)(o, HTMLAnchorElement) &&
              null != o.href &&
              ((t = o.href), (l = o.textContent)),
            (o = o.parentNode);
        return { href: t, src: n, textContent: l };
      }
      function S(e) {
        let {
            channel: t,
            message: n,
            messageItem: r,
            target: o,
            onSelect: E,
          } = e,
          { href: M, src: h, textContent: m } = x(o),
          _ = (0, d.default)(n, t),
          I = (0, f.default)(null != M ? M : h, m),
          S = (0, c.default)(h),
          v = (0, u.default)({
            id: n.id,
            label: g.default.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(n.channel_id, "-").concat(n.id),
          }),
          L = C(r, t.guild_id),
          G = p(r, r.message, t),
          F = (0, i.default)(n, t, { hoist: !1 });
        return (0, l.jsxs)(s.Menu, {
          navId: "message",
          onClose: a.closeContextMenu,
          "aria-label": g.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          onSelect: E,
          children: [
            (0, l.jsxs)(s.MenuGroup, { children: [L, G, F] }),
            (0, l.jsxs)(s.MenuGroup, { children: [_, S, I, v] }),
          ],
        });
      }
    },
    399699: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("469563"),
        o = n("88885"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: o,
              ...a
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, l.jsx)("rect", {
                  className: o,
                  x: "2.10049",
                  y: "20.4853",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2.10049 20.4853)",
                  fill: r,
                }),
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.169 5.60117L12.5325 4.12835C12.3424 3.95722 12.0537 3.95722 11.8635 4.12835L3.16652 11.9557C2.82591 12.2622 3.04276 12.8273 3.50101 12.8273H5.19803V14.5721L14.169 5.60117ZM5.19803 17.4005L15.6576 6.94095L17.1384 8.27369L10.5848 14.8273H10.198V15.2141L5.25403 20.1581C5.21775 20.0546 5.19803 19.9432 5.19803 19.8273V17.4005ZM7.41324 20.8273H9.19803C9.75031 20.8273 10.198 20.3796 10.198 19.8273V18.0425L7.41324 20.8273ZM13.4132 14.8273H14.198V19.8273C14.198 20.3796 14.6457 20.8273 15.198 20.8273H18.198C18.7503 20.8273 19.198 20.3796 19.198 19.8273V12.8273H20.895C21.3533 12.8273 21.5701 12.2622 21.2295 11.9557L18.6271 9.61347L13.4132 14.8273Z",
                  fill: r,
                }),
              ],
            });
          },
          o.HomeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    605244: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HomeSlashIcon: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("669491"),
        o = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, o.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM15.5 3.7a.5.5 0 0 1 .05.75l-10.9 10.9a.5.5 0 0 1-.85-.3l-.27-2.72a.46.46 0 0 0-.35-.4 2 2 0 0 1-.79-3.54l8.39-6.45a2 2 0 0 1 2.44 0L15.5 3.7ZM6.31 22c-.12 0-.17-.14-.08-.23l1.92-1.92a.5.5 0 0 1 .85.36V21a1 1 0 0 1-1 1H6.31ZM14.47 13.53c-.19.19-.19.5-.03.73.35.5.56 1.1.56 1.74v5a1 1 0 0 0 1 1h1.69a2 2 0 0 0 1.99-1.8l.79-7.87c.02-.2.16-.36.35-.4a2 2 0 0 0 .79-3.54l-.78-.6a.5.5 0 0 0-.66.04l-5.7 5.7Z",
            className: a,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=0cbe23dd487f9b399441.js.map
