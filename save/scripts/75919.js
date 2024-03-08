(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75919"],
  {
    563912: function (l, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return h;
          },
        });
      var a = n("37983");
      n("884691");
      var d = n("446674"),
        i = n("77078"),
        s = n("299285"),
        t = n("189459"),
        o = n("145131"),
        u = n("701909"),
        r = n("782340"),
        c = n("585254"),
        h = l => {
          let { onClose: e, transitionState: n } = l,
            { error: h, applicationName: R } = (0, d.useStateFromStoresObject)(
              [t.default, s.default],
              () => {
                let l = t.default.getLastError(),
                  e = null;
                if (null != l && null != l.applicationId) {
                  let n = s.default.getApplication(l.applicationId);
                  null != n && (e = n.name);
                }
                return { error: l, applicationName: e };
              }
            );
          return (0, a.jsxs)(i.ModalRoot, {
            transitionState: n,
            size: i.ModalSize.SMALL,
            "aria-label": r.default.Messages.DISPATCH_ERROR_MODAL_HEADER,
            children: [
              (0, a.jsxs)(i.ModalHeader, {
                justify: o.default.Justify.BETWEEN,
                separator: !1,
                children: [
                  (0, a.jsx)(o.default.Child, {
                    grow: 1,
                    children: (0, a.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      children: r.default.Messages.DISPATCH_ERROR_MODAL_HEADER,
                    }),
                  }),
                  (0, a.jsx)(o.default.Child, {
                    grow: 0,
                    children: (0, a.jsx)(i.ModalCloseButton, { onClick: e }),
                  }),
                ],
              }),
              (0, a.jsx)(i.ModalContent, {
                children: (0, a.jsxs)("div", {
                  className: c.body,
                  children: [
                    (0, a.jsx)("div", {
                      children:
                        r.default.Messages.DISPATCH_ERROR_MODAL_DESCRIPTION.format(
                          { link: "https://dis.gd/dispatch-error" }
                        ),
                    }),
                    (0, a.jsx)("div", {
                      className: c.supportCallToAction,
                      children: r.default.Messages.DISPATCH_ERROR_MODAL_BODY,
                    }),
                    (0, a.jsx)("div", {
                      className: c.errorLabel,
                      children:
                        r.default.Messages.DISPATCH_ERROR_MODAL_ERROR_LABEL,
                    }),
                    (0, a.jsx)("div", {
                      className: c.errorDetails,
                      children: (0, a.jsxs)("div", {
                        children: [
                          null != R ? "Game: ".concat(R, "\n") : null,
                          (null == h ? void 0 : h.applicationId) != null
                            ? "Game ID: ".concat(h.applicationId, "\n")
                            : null,
                          (null == h ? void 0 : h.branchId) != null &&
                          (null == h ? void 0 : h.applicationId) !==
                            (null == h ? void 0 : h.branchId)
                            ? "Branch ID: ".concat(
                                null == h ? void 0 : h.branchId,
                                "\n"
                              )
                            : null,
                          (null == h ? void 0 : h.code) != null
                            ? "Error Code: ".concat(
                                null == h ? void 0 : h.code,
                                "\n"
                              )
                            : null,
                          (null == h ? void 0 : h.uuid) != null
                            ? "Unique Case ID: ".concat(
                                null == h ? void 0 : h.uuid
                              )
                            : null,
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)(i.ModalFooter, {
                children: [
                  (0, a.jsx)(i.Button, {
                    onClick: () => {
                      window.open(u.default.getSubmitRequestURL());
                    },
                    children:
                      r.default.Messages.DISPATCH_ERROR_MODAL_OPEN_TICKET,
                  }),
                  (0, a.jsx)(i.Button, {
                    look: i.Button.Looks.LINK,
                    onClick: e,
                    color: c.closeLink,
                    children: r.default.Messages.CLOSE,
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=5c5613526de4d1eddaf9.js.map
