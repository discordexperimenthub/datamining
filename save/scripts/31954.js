(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31954"],
  {
    994015: function (e, a, s) {
      "use strict";
      e.exports = s.p + "de23013de6300a7ccfee.png";
    },
    109253: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return m;
          },
        });
      var t = s("37983");
      s("884691");
      var r = s("414456"),
        n = s.n(r),
        l = s("77078"),
        i = s("363658"),
        o = s("145131"),
        c = s("782340"),
        d = s("513920"),
        u = s("994015"),
        m = e => {
          let {
            onClose: a,
            transitionState: s,
            showHideSuppressWarning: r = !1,
          } = e;
          return (0, t.jsx)(l.ModalRoot, {
            transitionState: s,
            className: d.container,
            "aria-label": c.default.Messages.HUB_STUDY_ROOM_NOTICE_TITLE,
            children: (0, t.jsxs)("form", {
              onSubmit: e => {
                null == e || e.preventDefault(),
                  i.default.clearSuppressWarning(),
                  null == a || a();
              },
              className: d.form,
              children: [
                (0, t.jsxs)(l.ModalContent, {
                  className: d.modalContent,
                  children: [
                    (0, t.jsx)("img", { src: u, alt: "", className: d.hero }),
                    (0, t.jsx)(l.Text, {
                      className: d.title,
                      color: "header-primary",
                      variant: "text-md/semibold",
                      children:
                        c.default.Messages.HUB_STUDY_ROOM_SUPPRESS_TITLE,
                    }),
                    (0, t.jsx)(l.Text, {
                      className: d.description,
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children:
                        c.default.Messages.HUB_STUDY_ROOM_SUPPRESS_DESCRIPTION,
                    }),
                  ],
                }),
                (0, t.jsxs)(l.ModalFooter, {
                  justify: o.default.Justify.BETWEEN,
                  wrap: o.default.Wrap.WRAP,
                  children: [
                    (0, t.jsx)(l.Button, {
                      type: "submit",
                      size: l.Button.Sizes.XLARGE,
                      className: n(d.primaryButton, d.gutter),
                      autoFocus: !0,
                      children: c.default.Messages.GOT_IT,
                    }),
                    r &&
                      (0, t.jsx)(l.Clickable, {
                        onClick: () => i.default.clearSuppressWarning(!0),
                        className: d.minorContainer,
                        children: (0, t.jsx)(l.Text, {
                          className: d.minorAction,
                          variant: "text-xs/normal",
                          children: c.default.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=1a1819174046da3dc0ba.js.map
