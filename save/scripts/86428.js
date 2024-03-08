(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86428"],
  {
    43264: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return M;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("446674"),
        i = a("77078"),
        n = a("299285"),
        r = a("145131"),
        o = a("701909"),
        d = a("49111"),
        u = a("782340"),
        c = a("193523");
      let N = o.default.getArticleURL(d.HelpdeskArticles.MISSING_ENTITLEMENT);
      var M = s.default.connectStores([n.default], e => {
        let { applicationId: t } = e;
        return { application: n.default.getApplication(t) };
      })(function (e) {
        let { application: t, transitionState: a, onClose: s } = e;
        return (0, l.jsxs)(i.ModalRoot, {
          transitionState: a,
          size: i.ModalSize.MEDIUM,
          children: [
            (0, l.jsxs)(i.ModalHeader, {
              align: r.default.Align.CENTER,
              justify: r.default.Justify.BETWEEN,
              children: [
                (0, l.jsx)(i.FormTitle, {
                  tag: i.FormTitleTags.H4,
                  children:
                    null != t
                      ? u.default.Messages.MISSING_ENTITLEMENT_MODAL_HEADER.format(
                          { applicationName: t.name }
                        )
                      : u.default.Messages
                          .MISSING_ENTITLEMENT_MODAL_HEADER_UNKNOWN_APPLICATION,
                }),
                (0, l.jsx)(i.ModalCloseButton, { onClick: s }),
              ],
            }),
            (0, l.jsxs)(i.ModalContent, {
              children: [
                (0, l.jsx)("div", { className: c.missingEntitlementImage }),
                (0, l.jsx)(i.Text, {
                  className: c.text,
                  variant: "text-md/normal",
                  children:
                    null != t
                      ? u.default.Messages.MISSING_ENTITLEMENT_MODAL_BODY.format(
                          { applicationName: t.name, supportArticleURL: N }
                        )
                      : u.default.Messages.MISSING_ENTITLEMENT_MODAL_BODY_UNKNOWN_APPLICATION.format(
                          { supportArticleURL: N }
                        ),
                }),
              ],
            }),
            (0, l.jsx)(i.ModalFooter, {
              children: (0, l.jsx)(i.Button, {
                onClick: s,
                children: u.default.Messages.OKAY,
              }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=6ab49335e14f19130e14.js.map
