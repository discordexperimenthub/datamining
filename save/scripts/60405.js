(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60405"],
  {
    631222: function (e, s, a) {
      "use strict";
      e.exports = a.p + "d5ddb47f86d17fe35f48.svg";
    },
    754768: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          ConfirmNoSharedServerSubscribeWarningModal: function () {
            return d;
          },
        });
      var t = a("37983");
      a("884691");
      var n = a("77078"),
        o = a("782340"),
        r = a("526980"),
        i = a("631222");
      function d(e) {
        let {
          applicationName: s,
          onConfirm: a,
          onClose: d,
          onCancel: l,
          ...c
        } = e;
        return (0, t.jsxs)(n.ModalRoot, {
          ...c,
          children: [
            (0, t.jsxs)(n.ModalContent, {
              className: r.body,
              children: [
                (0, t.jsx)("img", {
                  alt: "",
                  src: i,
                  className: r.img,
                  "aria-hidden": !0,
                }),
                (0, t.jsx)(n.Heading, {
                  variant: "heading-xl/extrabold",
                  className: r.title,
                  children:
                    o.default.Messages.APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_TITLE.format(
                      { applicationName: s }
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
                    a(), d();
                  },
                  children: o.default.Messages.CONTINUE,
                }),
                (0, t.jsx)(n.Button, {
                  className: r.cancel,
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
//# sourceMappingURL=f1e3f0dfc41c36e16e1d.js.map
