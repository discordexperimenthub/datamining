(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26567"],
  {
    997588: function (t, e, n) {
      "use strict";
      t.exports = n.p + "991ecc3f2fc892c5494e.svg";
    },
    536071: function (t, e, n) {
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
        i = n("476765"),
        r = n("782340"),
        l = n("407224");
      function u(t) {
        let { href: e, onClose: u, transitionState: d } = t,
          c = (0, i.useUID)();
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
                    children:
                      r.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_TITLE,
                  }),
                  (0, s.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: l.body,
                    children:
                      r.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_BODY,
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
                  children:
                    r.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_CANCEL,
                }),
                (0, s.jsx)(o.Button, {
                  type: "button",
                  size: o.Button.Sizes.MEDIUM,
                  color: o.Button.Colors.TRANSPARENT,
                  look: o.Button.Looks.LINK,
                  onClick: () => {
                    u(), (0, a.default)(e, !0);
                  },
                  children:
                    r.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_DOWNLOAD,
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
            return i;
          },
          useUID: function () {
            return r;
          },
          UID: function () {
            return l;
          },
        });
      var s = n("995008"),
        o = n.n(s),
        a = n("775560");
      let i = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return o(t);
        },
        r = () => (0, a.useLazyValue)(() => i()),
        l = t => {
          let { children: e } = t;
          return e(r());
        };
    },
  },
]);
//# sourceMappingURL=7df29f9e222325b25bf3.js.map
