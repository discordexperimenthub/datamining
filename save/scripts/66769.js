(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66769"],
  {
    88885: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("605244");
      s.es(n, t);
    },
    814781: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return M;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("611221"),
        r = s("77078"),
        a = s("272030"),
        u = s("861370"),
        o = s("518155"),
        d = s("447651"),
        i = s("26051"),
        c = s("449008"),
        f = s("437150"),
        E = s("782340");
      function M(e) {
        let { channel: t, item: s, target: M, onSelect: m } = e,
          h = (function (e) {
            switch (e.type) {
              case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
                return e.messages[0].message;
              case l.GuildFeedItemTypes.CONVERSATION:
                return e.root.messages[0];
              default:
                (0, c.assertNever)(e);
            }
          })(s),
          g = (function (e) {
            switch (e.type) {
              case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
                return e.messages[e.messages.length - 1].message;
              case l.GuildFeedItemTypes.CONVERSATION:
                return e.root.messages[e.root.messages.length - 1];
              default:
                (0, c.assertNever)(e);
            }
          })(s),
          { href: I, src: _, textContent: S } = (0, f.targetToContext)(M),
          C = (0, o.default)(h, t),
          G = (0, i.default)(null != I ? I : _, S),
          p = (0, d.default)(_),
          v = (0, u.default)({
            id: g.id,
            label: E.default.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(t.id, "-").concat(g.id),
          }),
          x = (0, f.useGuildFeedHideItem)(s, t.guild_id),
          L = (0, f.useGuildFeedRemoveItem)(s, g, t);
        return (0, n.jsxs)(r.Menu, {
          navId: "message",
          onClose: a.closeContextMenu,
          "aria-label": E.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          onSelect: m,
          children: [
            (0, n.jsxs)(r.MenuGroup, { children: [x, L] }),
            (0, n.jsxs)(r.MenuGroup, { children: [C, p, G, v] }),
          ],
        });
      }
    },
    437150: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useGuildFeedHideItem: function () {
            return S;
          },
          useGuildFeedRemoveItem: function () {
            return C;
          },
          targetToContext: function () {
            return G;
          },
          default: function () {
            return p;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("118810"),
        r = s("65597"),
        a = s("77078"),
        u = s("272030"),
        o = s("861370"),
        d = s("126423"),
        i = s("518155"),
        c = s("447651"),
        f = s("26051"),
        E = s("271938"),
        M = s("957255"),
        m = s("867544"),
        h = s("399699"),
        g = s("713810"),
        I = s("49111"),
        _ = s("782340");
      function S(e, t) {
        return (0, n.jsx)(a.MenuItem, {
          id: "hide-feed-message",
          label: _.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
          action: s => (
            s.stopPropagation(), (0, g.hideItemFromGuildFeed)(e, t)
          ),
          icon: m.default,
          iconProps: { foregroundColor: "currentColor" },
        });
      }
      function C(e, t, s) {
        let l = (0, r.useStateFromStores)([E.default], () => E.default.getId()),
          u = (0, r.useStateFromStores)(
            [M.default],
            () => M.default.can(I.Permissions.MANAGE_MESSAGES, s),
            [s]
          ),
          o = t.author.id === l || u;
        return o
          ? (0, n.jsx)(a.MenuItem, {
              id: "remove-feed-message",
              label: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
              action: t => {
                t.stopPropagation();
                let s = !0;
                return (
                  t.shiftKey && (s = !1),
                  (function (e, t) {
                    if (!t) {
                      (0, g.removeItemFromGuildFeed)(e);
                      return;
                    }
                    (0, a.openModal)(t =>
                      (0, n.jsx)(a.ConfirmModal, {
                        header:
                          _.default.Messages
                            .GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
                        confirmText:
                          _.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
                        cancelText: _.default.Messages.CANCEL,
                        onConfirm: () => (0, g.removeItemFromGuildFeed)(e),
                        ...t,
                        children: (0, n.jsx)(a.Text, {
                          variant: "text-md/normal",
                          children:
                            _.default.Messages
                              .GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT,
                        }),
                      })
                    );
                  })(e, s)
                );
              },
              icon: h.default,
              iconProps: { foregroundColor: "currentColor" },
            })
          : null;
      }
      function G(e) {
        let t,
          s,
          n,
          r = e;
        for (; (0, l.isElement)(r, Node); )
          (0, l.isElement)(r, HTMLImageElement) && null != r.src && (s = r.src),
            (0, l.isElement)(r, HTMLAnchorElement) &&
              null != r.href &&
              ((t = r.href), (n = r.textContent)),
            (r = r.parentNode);
        return { href: t, src: s, textContent: n };
      }
      function p(e) {
        let {
            channel: t,
            message: s,
            messageItem: l,
            target: r,
            onSelect: E,
          } = e,
          { href: M, src: m, textContent: h } = G(r),
          g = (0, i.default)(s, t),
          I = (0, f.default)(null != M ? M : m, h),
          p = (0, c.default)(m),
          v = (0, o.default)({
            id: s.id,
            label: _.default.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(s.channel_id, "-").concat(s.id),
          }),
          x = S(l, t.guild_id),
          L = C(l, l.message, t),
          A = (0, d.default)(s, t, { hoist: !1 });
        return (0, n.jsxs)(a.Menu, {
          navId: "message",
          onClose: u.closeContextMenu,
          "aria-label": _.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          onSelect: E,
          children: [
            (0, n.jsxs)(a.MenuGroup, { children: [x, L, A] }),
            (0, n.jsxs)(a.MenuGroup, { children: [g, p, I, v] }),
          ],
        });
      }
    },
    399699: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("469563"),
        r = s("88885"),
        a = s("75196"),
        u = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: l = "currentColor",
              foreground: r,
              ...u
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, a.default)(u),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, n.jsx)("rect", {
                  className: r,
                  x: "2.10049",
                  y: "20.4853",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2.10049 20.4853)",
                  fill: l,
                }),
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.169 5.60117L12.5325 4.12835C12.3424 3.95722 12.0537 3.95722 11.8635 4.12835L3.16652 11.9557C2.82591 12.2622 3.04276 12.8273 3.50101 12.8273H5.19803V14.5721L14.169 5.60117ZM5.19803 17.4005L15.6576 6.94095L17.1384 8.27369L10.5848 14.8273H10.198V15.2141L5.25403 20.1581C5.21775 20.0546 5.19803 19.9432 5.19803 19.8273V17.4005ZM7.41324 20.8273H9.19803C9.75031 20.8273 10.198 20.3796 10.198 19.8273V18.0425L7.41324 20.8273ZM13.4132 14.8273H14.198V19.8273C14.198 20.3796 14.6457 20.8273 15.198 20.8273H18.198C18.7503 20.8273 19.198 20.3796 19.198 19.8273V12.8273H20.895C21.3533 12.8273 21.5701 12.2622 21.2295 11.9557L18.6271 9.61347L13.4132 14.8273Z",
                  fill: l,
                }),
              ],
            });
          },
          r.HomeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    605244: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          HomeSlashIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("669491"),
        r = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, r.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM15.5 3.7a.5.5 0 0 1 .05.75l-10.9 10.9a.5.5 0 0 1-.85-.3l-.27-2.72a.46.46 0 0 0-.35-.4 2 2 0 0 1-.79-3.54l8.39-6.45a2 2 0 0 1 2.44 0L15.5 3.7ZM6.31 22c-.12 0-.17-.14-.08-.23l1.92-1.92a.5.5 0 0 1 .85.36V21a1 1 0 0 1-1 1H6.31ZM14.47 13.53c-.19.19-.19.5-.03.73.35.5.56 1.1.56 1.74v5a1 1 0 0 0 1 1h1.69a2 2 0 0 0 1.99-1.8l.79-7.87c.02-.2.16-.36.35-.4a2 2 0 0 0 .79-3.54l-.78-.6a.5.5 0 0 0-.66.04l-5.7 5.7Z",
            className: u,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=3b10d091026900f6c38b.js.map
