(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95711"],
  {
    386092: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var s = a("37983");
      a("884691");
      var l = a("77078"),
        n = a("599110"),
        o = a("803725"),
        d = a("49111"),
        i = a("782340"),
        r = a("312797");
      function c(e) {
        let {
          transitionState: t,
          onClose: a,
          onBeforeDelete: c,
          onAfterDelete: u,
          clip: E,
        } = e;
        return (0, s.jsxs)(l.ModalRoot, {
          size: l.ModalSize.SMALL,
          transitionState: t,
          className: r.modal,
          children: [
            (0, s.jsxs)(l.ModalContent, {
              className: r.modalContent,
              children: [
                (0, s.jsxs)("div", {
                  className: r.header,
                  children: [
                    (0, s.jsx)(l.Heading, {
                      className: r.title,
                      variant: "text-md/semibold",
                      color: "header-primary",
                      children: i.default.Messages.CLIPS_DELETE_MODAL_TITLE,
                    }),
                    (0, s.jsx)(l.ModalCloseButton, { onClick: a }),
                  ],
                }),
                (0, s.jsx)(l.Text, {
                  variant: "text-md/medium",
                  color: "text-normal",
                  className: r.body,
                  children: i.default.Messages.CLIPS_DELETE_MODAL_SUBTITLE,
                }),
              ],
            }),
            (0, s.jsx)(l.ModalFooter, {
              children: (0, s.jsx)(l.Button, {
                color: l.Button.Colors.RED,
                onClick: function () {
                  null == c || c(),
                    o.deleteClip(E.filepath),
                    u(),
                    n.default.track(d.AnalyticEvents.CLIP_DELETED);
                },
                children: i.default.Messages.CLIPS_DELETE_CLIP,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=6ec628d5e942d54115bd.js.map
