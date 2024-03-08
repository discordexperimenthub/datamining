(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29473"],
  {
    299052: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return c;
          },
        });
      var l = a("37983");
      a("884691");
      var r = a("77078"),
        t = a("476765"),
        d = a("166382"),
        o = a("782340"),
        n = a("855375"),
        c = e => {
          let { transitionState: s, errors: a, onClose: c } = e,
            i = (0, t.useUID)();
          return (0, l.jsxs)(r.ModalRoot, {
            transitionState: s,
            "aria-labelledby": i,
            children: [
              (0, l.jsx)(r.ModalHeader, {
                separator: !1,
                className: n.modalHeader,
                children: (0, l.jsx)(r.ModalCloseButton, {
                  onClick: c,
                  className: n.closeButton,
                }),
              }),
              (0, l.jsxs)(r.ModalContent, {
                className: n.modalContent,
                children: [
                  (0, l.jsxs)(r.FormSection, {
                    className: n.header,
                    children: [
                      (0, l.jsx)(r.FormTitle, {
                        id: i,
                        className: n.title,
                        children: o.default.Messages.UPLOAD_ERROR_TITLE,
                      }),
                      (0, l.jsx)(r.FormText, {
                        type: r.FormTextTypes.DESCRIPTION,
                        children: o.default.Messages.UPLOAD_ERROR_DESCRIPTION,
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: n.errors,
                    children: (0, l.jsx)(r.Scroller, {
                      children: a.map(e =>
                        (0, l.jsx)(d.default, { error: e }, e.filename)
                      ),
                    }),
                  }),
                  (0, l.jsx)(r.Button, {
                    onClick: c,
                    children: o.default.Messages.GOT_IT,
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=307fecfc34c590498656.js.map
