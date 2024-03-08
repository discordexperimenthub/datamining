(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8184"],
  {
    513061: function (s, t, e) {
      "use strict";
      s.exports = e.p + "c2132d8f0b74c0492b41.svg";
    },
    861054: function (s, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return d;
          },
        }),
        e("222007");
      var n = e("37983"),
        o = e("884691"),
        i = e("77078"),
        l = e("782340"),
        r = e("643035");
      class a extends o.PureComponent {
        render() {
          let {
            transitionState: s,
            header: t,
            body: o,
            confirmText: a,
          } = this.props;
          return (0, n.jsxs)(i.ModalRoot, {
            transitionState: s,
            "aria-label": t,
            children: [
              (0, n.jsxs)(i.ModalContent, {
                className: r.content,
                children: [
                  (0, n.jsx)("img", { src: e("513061"), alt: t }),
                  (0, n.jsx)(i.Heading, {
                    variant: "heading-xl/semibold",
                    className: r.header,
                    children: t,
                  }),
                  (0, n.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: o,
                  }),
                ],
              }),
              (0, n.jsxs)(i.ModalFooter, {
                className: r.footer,
                children: [
                  (0, n.jsx)(i.Button, {
                    size: i.Button.Sizes.SMALL,
                    onClick: this.handleConfirm,
                    children: a,
                  }),
                  (0, n.jsx)(i.Button, {
                    size: i.Button.Sizes.SMALL,
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    onClick: this.handleDismiss,
                    children: l.default.Messages.CLOSE,
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...s) {
          super(...s),
            (this.handleConfirm = () => {
              let { onConfirm: s, onClose: t } = this.props;
              null == t || t(), null == s || s();
            }),
            (this.handleDismiss = () => {
              let { onDismiss: s, onClose: t } = this.props;
              null == t || t(), null == s || s();
            });
        }
      }
      var d = a;
    },
  },
]);
//# sourceMappingURL=30eb68f874345c58836a.js.map
