(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36343"],
  {
    494078: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var o = n("37983"),
        l = n("884691"),
        s = n("77078"),
        a = n("782340"),
        r = n("588385");
      function i(e) {
        let {
            onConfirm: t,
            onClose: n,
            validationText: i,
            errorText: u,
            header: c,
            className: d,
            cancelText: x,
            confirmText: h,
            instructionText: m,
            transitionState: p,
            children: C,
          } = e,
          [f, j] = l.useState(""),
          [N, g] = l.useState(null),
          M =
            l.Children.count(C) > 0
              ? (0, o.jsx)(s.Card, {
                  type: s.Card.Types.WARNING,
                  className: r.card,
                  children: (0, o.jsx)(s.Text, {
                    className: r.warning,
                    variant: "text-md/normal",
                    children: C,
                  }),
                })
              : null;
        return (0, o.jsx)(s.ModalRoot, {
          transitionState: p,
          className: d,
          children: (0, o.jsxs)("form", {
            onSubmit: function (e) {
              if ((e.preventDefault(), f.toLowerCase() !== i.toLowerCase())) {
                g(u);
                return;
              }
              null == t || t(), n();
            },
            children: [
              (0, o.jsx)(s.ModalHeader, {
                separator: !1,
                children: (0, o.jsx)(s.Heading, {
                  variant: "heading-lg/semibold",
                  children: c,
                }),
              }),
              (0, o.jsxs)(s.ModalContent, {
                children: [
                  M,
                  (0, o.jsxs)(s.FormItem, {
                    title: m,
                    className: r.spacing,
                    children: [
                      (0, o.jsx)(s.TextInput, {
                        id: "text-entry-confirm",
                        type: "text",
                        value: f,
                        autoComplete: "off",
                        onChange: j,
                        autoFocus: !0,
                      }),
                      null != N && "" !== N
                        ? (0, o.jsx)(s.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: r.error,
                            children: N,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)(s.ModalFooter, {
                children: [
                  (0, o.jsx)(s.Button, {
                    type: "submit",
                    color: s.Button.Colors.RED,
                    children: null != h ? h : a.default.Messages.CONFIRM,
                  }),
                  (0, o.jsx)(s.Button, {
                    onClick: n,
                    look: s.Button.Looks.LINK,
                    color: s.Button.Colors.PRIMARY,
                    children: null != x ? x : a.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=87b4a941e067f36846c0.js.map
