(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11547"],
  {
    997588: function (t, e, n) {
      "use strict";
      t.exports = n.p + "991ecc3f2fc892c5494e.svg";
    },
    851172: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("77078"),
        a = n("545158"),
        r = n("476765"),
        i = n("782340"),
        l = n("244925");
      function u(t) {
        let { url: e, onClose: u, transitionState: d } = t,
          c = (0, r.useUID)();
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: d,
          "aria-labelledby": c,
          children: [
            (0, s.jsx)("img", { className: l.art, src: n("997588"), alt: "" }),
            (0, s.jsx)(o.ModalContent, {
              children: (0, s.jsxs)("div", {
                className: l.modalContent,
                children: [
                  (0, s.jsx)(o.Heading, {
                    id: c,
                    variant: "heading-lg/semibold",
                    className: l.title,
                    children: i.default.Messages.LINK_NOT_DISCORD_WARNING_TITLE,
                  }),
                  (0, s.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: l.body,
                    children:
                      i.default.Messages.LINK_NOT_DISCORD_WARNING_BODY.format({
                        url: e,
                      }),
                  }),
                ],
              }),
            }),
            (0, s.jsxs)(o.ModalFooter, {
              children: [
                (0, s.jsx)(o.Button, {
                  type: "button",
                  size: o.Button.Sizes.MEDIUM,
                  color: o.Button.Colors.BRAND,
                  onClick: u,
                  children: i.default.Messages.LINK_NOT_DISCORD_WARNING_CANCEL,
                }),
                (0, s.jsx)(o.Button, {
                  type: "button",
                  size: o.Button.Sizes.MEDIUM,
                  color: o.Button.Colors.TRANSPARENT,
                  look: o.Button.Looks.LINK,
                  onClick: () => {
                    (0, a.default)(e, !0);
                  },
                  children:
                    i.default.Messages.LINK_NOT_DISCORD_WARNING_CONTINUE,
                }),
              ],
            }),
          ],
        });
      }
    },
    476765: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          uid: function () {
            return r;
          },
          useUID: function () {
            return i;
          },
          UID: function () {
            return l;
          },
        });
      var s = n("995008"),
        o = n.n(s),
        a = n("775560");
      let r = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return o(t);
        },
        i = () => (0, a.useLazyValue)(() => r()),
        l = t => {
          let { children: e } = t;
          return e(i());
        };
    },
  },
]);
//# sourceMappingURL=9aeac6c946014e9ae755.js.map
