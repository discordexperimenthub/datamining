(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21506"],
  {
    961477: function (e, s, a) {
      "use strict";
      e.exports = a.p + "072a9623d53db2e53fc7.png";
    },
    285281: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return o;
          },
        });
      var t = a("37983");
      a("884691");
      var n = a("77078"),
        i = a("954016"),
        r = a("782340"),
        E = a("48860"),
        l = a("961477");
      function o(e) {
        let { application: s, onCancel: a, onClose: o, onConfirm: d, ...c } = e;
        return (0, t.jsxs)(n.ModalRoot, {
          role: "alertdialog",
          transitionState: c.transitionState,
          className: E.modalRoot,
          children: [
            (0, t.jsx)("div", {
              className: E.birbContainer,
              children: (0, t.jsx)("img", {
                src: l,
                className: E.announcementBirb,
                alt: r.default.Messages
                  .EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_ANNOUNCEMENT_BIRD_A11Y_LABEL,
              }),
            }),
            (0, t.jsxs)(n.ModalContent, {
              className: E.modalContent,
              children: [
                (0, t.jsx)(n.Text, {
                  variant: "eyebrow",
                  className: E.eyebrow,
                  children:
                    r.default.Messages
                      .EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_HEADS_UP,
                }),
                (0, t.jsx)(n.Heading, {
                  variant: "heading-lg/bold",
                  className: E.header,
                  children:
                    r.default.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_TITLE.format(
                      { activityName: s.name }
                    ),
                }),
                (0, t.jsx)(n.Text, {
                  variant: "text-sm/normal",
                  className: E.subHeader,
                  children:
                    r.default.Messages
                      .EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_SUBTITLE,
                }),
                (0, t.jsxs)("div", {
                  className: E.buttonContainer,
                  children: [
                    (0, t.jsx)(n.Button, {
                      size: n.Button.Sizes.LARGE,
                      onClick: () => {
                        d(), o();
                      },
                      children: r.default.Messages.CONTINUE,
                    }),
                    (0, t.jsx)(n.Button, {
                      size: n.Button.Sizes.LARGE,
                      onClick: () => {
                        a(), o();
                      },
                      color: n.Button.Colors.PRIMARY,
                      children: r.default.Messages.CANCEL,
                    }),
                    (0, t.jsx)(n.Text, {
                      variant: "text-xs/normal",
                      children: (0, t.jsx)(n.Anchor, {
                        href: i.PRIVATE_APPS_HELP_ARTICLE,
                        children:
                          r.default.Messages
                            .EMBEDDED_ACTIVITIES_EXTERNAL_APP_LEARN_MORE,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=40d1f2d2922a3dfd34bd.js.map
