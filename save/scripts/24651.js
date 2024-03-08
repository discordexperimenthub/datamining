(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24651"],
  {
    553621: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          IconVariant: function () {
            return a;
          },
          default: function () {
            return h;
          },
        }),
        e("222007");
      var a,
        o,
        i = e("37983"),
        r = e("884691"),
        s = e("77078"),
        l = e("191814"),
        c = e("423487"),
        d = e("782340"),
        u = e("750412");
      ((o = a || (a = {})).DANGER = "danger"), (o.WARNING = "warning");
      function h(n) {
        let {
            transitionState: t,
            onClose: e,
            title: a,
            body: o,
            cta: h,
            closeLabel: x,
            onConfirm: N,
            iconVariant: f = "warning",
          } = n,
          [g, j] = r.useState(!1),
          m = async () => {
            j(!0);
            try {
              await N(), e();
            } finally {
              j(!1);
            }
          },
          w =
            null != a
              ? a
              : d.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE;
        return (0, i.jsxs)(s.ModalRoot, {
          className: u.container,
          size: s.ModalSize.DYNAMIC,
          transitionState: t,
          "aria-label": w,
          children: [
            (0, i.jsxs)(s.ModalContent, {
              className: u.content,
              children: [
                (0, i.jsxs)("div", {
                  className: u.header,
                  children: [
                    (0, i.jsx)(c.default, {
                      width: 20,
                      height: 20,
                      className: (function (n) {
                        switch (n) {
                          case "danger":
                            return u.dangerIcon;
                          case "warning":
                            return u.warningIcon;
                        }
                      })(f),
                    }),
                    (0, i.jsx)(l.default, { size: 8, horizontal: !0 }),
                    (0, i.jsx)(s.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: w,
                    }),
                  ],
                }),
                (0, i.jsx)(l.default, { size: 12 }),
                (0, i.jsx)(s.Text, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  className: u.body,
                  children: o,
                }),
              ],
            }),
            (0, i.jsxs)(s.ModalFooter, {
              children: [
                (0, i.jsx)(s.Button, {
                  color: s.Button.Colors.BRAND,
                  onClick: m,
                  submitting: g,
                  children: h,
                }),
                (0, i.jsx)(l.default, { size: 12, horizontal: !0 }),
                null != x &&
                  (0, i.jsx)(s.Button, {
                    color: s.Button.Colors.PRIMARY,
                    look: s.Button.Looks.OUTLINED,
                    onClick: e,
                    children: x,
                  }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=71b574108ca2f5bf1594.js.map
