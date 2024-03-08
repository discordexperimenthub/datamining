(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60405"],
  {
    631222: function (e, a, s) {
      "use strict";
      e.exports = s.p + "d5ddb47f86d17fe35f48.svg";
    },
    754768: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          ConfirmNoSharedServerSubscribeWarningModal: function () {
            return d;
          },
        });
      var t = s("37983");
      s("884691");
      var n = s("77078"),
        o = s("782340"),
        i = s("526980"),
        r = s("631222");
      function d(e) {
        let { application: a, onConfirm: s, onClose: d, onCancel: l, ...c } = e;
        return (0, t.jsxs)(n.ModalRoot, {
          ...c,
          children: [
            (0, t.jsxs)(n.ModalContent, {
              className: i.body,
              children: [
                (0, t.jsx)("img", {
                  alt: "",
                  src: r,
                  className: i.img,
                  "aria-hidden": !0,
                }),
                (0, t.jsx)(n.Heading, {
                  variant: "heading-xl/extrabold",
                  className: i.title,
                  children:
                    o.default.Messages.APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_TITLE.format(
                      { applicationName: a.name }
                    ),
                }),
                (0, t.jsx)(n.Text, {
                  variant: "text-md/medium",
                  children:
                    o.default.Messages
                      .APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_BODY,
                }),
              ],
            }),
            (0, t.jsxs)(n.ModalFooter, {
              children: [
                (0, t.jsx)(n.Button, {
                  onClick: () => {
                    s(), d();
                  },
                  children: o.default.Messages.CONTINUE,
                }),
                (0, t.jsx)(n.Button, {
                  className: i.cancel,
                  onClick: () => {
                    l(), d();
                  },
                  look: n.Button.Looks.LINK,
                  color: n.Button.Colors.PRIMARY,
                  children: o.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=704389b2e6cfbeb795d1.js.map
