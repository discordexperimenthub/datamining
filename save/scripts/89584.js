(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89584"],
  {
    715668: function (e, s, o) {
      "use strict";
      o.r(s),
        o.d(s, {
          default: function () {
            return i;
          },
        });
      var t = o("37983");
      o("884691");
      var a = o("77078"),
        l = o("362189"),
        n = o("782340"),
        d = o("972775");
      function i(e) {
        let { transitionState: s, onClose: o, onDelete: i } = e;
        async function r() {
          await (0, l.deleteAllInvites)(), i();
        }
        return (0, t.jsxs)(a.ModalRoot, {
          size: a.ModalSize.SMALL,
          transitionState: s,
          className: d.modal,
          children: [
            (0, t.jsxs)(a.ModalContent, {
              className: d.modalContent,
              children: [
                (0, t.jsxs)("div", {
                  className: d.header,
                  children: [
                    (0, t.jsx)(a.Heading, {
                      className: d.title,
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children:
                        n.default.Messages.GAME_INVITES_DELETE_MODAL_TITLE,
                    }),
                    (0, t.jsx)(a.ModalCloseButton, { onClick: o }),
                  ],
                }),
                (0, t.jsx)(a.Text, {
                  variant: "text-md/normal",
                  color: "text-normal",
                  className: d.body,
                  children:
                    n.default.Messages.GAME_INVITES_DELETE_MODAL_SUBTITLE,
                }),
              ],
            }),
            (0, t.jsxs)(a.ModalFooter, {
              children: [
                (0, t.jsx)(a.Button, {
                  color: a.Button.Colors.RED,
                  onClick: r,
                  children: n.default.Messages.GAME_INVITES_DELETE_INVITES,
                }),
                (0, t.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.PRIMARY,
                  onClick: o,
                  children: n.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=2a80f4ef4dc36379c326.js.map
