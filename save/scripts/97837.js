(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97837"],
  {
    140092: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return n;
          },
        });
      var a = o("37983");
      o("884691");
      var s = o("77078"),
        r = o("782340");
      function n(e) {
        let { onClose: t, onConfirmDelete: o, transitionState: n } = e;
        return (0, a.jsxs)(s.ModalRoot, {
          transitionState: n,
          "aria-label":
            r.default.Messages
              .GUILD_ROLE_SUBSCRIPTION_EMOJI_DELETE_MODAL_HEADER,
          children: [
            (0, a.jsx)(s.ModalHeader, {
              separator: !1,
              children: (0, a.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children:
                  r.default.Messages
                    .GUILD_ROLE_SUBSCRIPTION_EMOJI_DELETE_MODAL_HEADER,
              }),
            }),
            (0, a.jsx)(s.ModalContent, {
              children: (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "header-primary",
                children:
                  r.default.Messages
                    .GUILD_ROLE_SUBSCRIPTION_EMOJI_DELETE_MODAL_BODY,
              }),
            }),
            (0, a.jsxs)(s.ModalFooter, {
              children: [
                (0, a.jsx)(s.Button, {
                  onClick: o,
                  color: s.Button.Colors.RED,
                  children:
                    r.default.Messages
                      .GUILD_ROLE_SUBSCRIPTION_EMOJI_DELETE_MODAL_DELETE_BUTTON,
                }),
                (0, a.jsx)(s.Button, {
                  onClick: t,
                  look: s.Button.Looks.LINK,
                  color: s.Button.Colors.PRIMARY,
                  children: r.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=0b65ca03b6685548478e.js.map
