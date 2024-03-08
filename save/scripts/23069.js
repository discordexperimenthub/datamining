(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23069"],
  {
    7476: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var a = s("37983"),
        n = s("884691"),
        i = s("77078"),
        l = s("782340"),
        r = s("383863"),
        o = e => {
          let { transitionState: t, processFiles: s, onClose: o } = e;
          return (
            n.useEffect(() => {
              let e = async () => {
                t === i.ModalTransitionState.ENTERED && (await s(), o());
              };
              e();
            }, [o, s, t]),
            (0, a.jsx)(i.ModalRoot, {
              transitionState: t,
              size: i.ModalSize.SMALL,
              "aria-label": l.default.Messages.UPLOADING_FILES_TITLE,
              children: (0, a.jsxs)(i.ModalContent, {
                className: r.modalContent,
                children: [
                  (0, a.jsx)(i.Spinner, { className: r.spinner }),
                  (0, a.jsx)(i.FormSection, {
                    tag: i.FormTitleTags.H1,
                    titleClassName: r.title,
                    title: l.default.Messages.UPLOADING_FILES_TITLE,
                    className: r.content,
                    children: (0, a.jsx)(i.FormText, {
                      type: i.FormTextTypes.DESCRIPTION,
                      className: r.description,
                      children: l.default.Messages.UPLOADING_LOADING_TEXT,
                    }),
                  }),
                ],
              }),
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=2a6dbbf1c4f1046adfc2.js.map
