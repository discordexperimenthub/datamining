(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70010"],
  {
    135154: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var s = a("37983");
      a("884691");
      var r = a("77078"),
        n = a("476765"),
        i = a("782340"),
        d = a("658959"),
        l = a("542631");
      function o(e) {
        let { transitionState: t, onClose: a, listing: o, subscription: c } = e,
          I = (0, n.useUID)();
        return (0, s.jsxs)(r.ModalRoot, {
          transitionState: t,
          "aria-labelledby": I,
          children: [
            (0, s.jsxs)(r.ModalContent, {
              className: d.contentContainer,
              children: [
                (0, s.jsx)("img", { src: l, alt: "" }),
                (0, s.jsx)(r.Heading, {
                  className: d.title,
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  id: I,
                  children:
                    i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                      { tier: o.name }
                    ),
                }),
                (0, s.jsx)(r.Text, {
                  className: d.subtitle,
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children:
                    i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format(
                      { timestamp: null == c ? void 0 : c.currentPeriodEnd }
                    ),
                }),
              ],
            }),
            (0, s.jsx)(r.ModalFooter, {
              children: (0, s.jsx)(r.Button, {
                size: r.Button.Sizes.MEDIUM,
                grow: !1,
                onClick: a,
                children:
                  i.default.Messages
                    .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=284521fa1080ec50e95b.js.map
