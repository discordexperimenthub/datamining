(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13917"],
  {
    647963: function (t, e, s) {
      "use strict";
      t.exports = s.p + "1a8d1cce8efe66c22c6d.svg";
    },
    128623: function (t, e, s) {
      "use strict";
      t.exports = s.p + "1c22c3f90dc16427f578.svg";
    },
    476422: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return d;
          },
        });
      var n = s("987317"),
        a = s("42203"),
        r = s("569363");
      function d() {
        let t = a.default.getDMFromUserId(r.SYSTEM_USER);
        null != t && n.default.selectPrivateChannel(t);
      }
    },
    389366: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return o;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("77078"),
        r = s("476422"),
        d = s("782340"),
        i = s("941606");
      function o(t) {
        let { transitionState: e, onClose: s } = t;
        return (0, n.jsxs)(a.ModalRoot, {
          transitionState: e,
          children: [
            (0, n.jsx)(a.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                children:
                  d.default.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_HEADER,
              }),
            }),
            (0, n.jsxs)(a.ModalContent, {
              children: [
                (0, n.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children:
                    d.default.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_BODY,
                }),
                (0, n.jsx)("div", { className: i.art }),
              ],
            }),
            (0, n.jsx)(a.ModalFooter, {
              children: (0, n.jsx)(a.Button, {
                type: "submit",
                color: a.Button.Colors.BRAND,
                onClick: () => {
                  (0, r.default)(), s();
                },
                children: d.default.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=caad9f563453cda49026.js.map
