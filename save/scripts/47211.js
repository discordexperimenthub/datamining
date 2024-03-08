(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47211"],
  {
    874600: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return i;
          },
        });
      var n = r("37983");
      r("884691");
      var s = r("77078"),
        a = r("782340"),
        o = r("927712");
      function i(t) {
        let { onClose: e, transitionState: r, body: i } = t;
        return (0, n.jsxs)(s.ModalRoot, {
          transitionState: r,
          children: [
            (0, n.jsx)(s.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(s.FormTitle, {
                tag: "h2",
                className: o.title,
                children: a.default.Messages.STREAM_REPORTED,
              }),
            }),
            (0, n.jsx)(s.ModalContent, {
              children:
                "string" == typeof i
                  ? (0, n.jsx)(s.Text, {
                      variant: "text-md/normal",
                      children: i,
                    })
                  : i,
            }),
            (0, n.jsx)(s.ModalFooter, {
              children: (0, n.jsx)(s.Button, {
                color: s.Button.Colors.BRAND,
                onClick: e,
                children: a.default.Messages.DONE,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=74b1c5d0b097b6ce18b0.js.map
